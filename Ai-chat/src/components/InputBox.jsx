import { useState } from "react";

function InputBox({ setMessages, messages }) {
  const [input, setInput] = useState("");

  // 🔹 Afzal ke keywords
  const afzalKeywords = [
    "afza", "afzal", "who made this bot", "creator",
    "afzal kaun hai", "bot kisne banaya", "who created you", "owner"
  ];

  // 🔹 Afzal ke reply lines (line by line)
  const afzalReplyLines = [
"👋 Hi there! Let me introduce my creator:",
"⭐ Name: **Md Afzal**",
"🌍 From: **Bihar, India**",
"🎓 Education: Diploma Engineer (Upgrading to B.Tech)",
"💻 Profession: **Front-end Developer & Engineer**",
"⚡ Skills: **C, HTML, CSS, Tailwind CSS, JavaScript, React JS, Basic Next.js, Git, REST API**",
"🛠️ Projects: 1. Portfolio Website, 2. E-commerce Site, 3. Blog Platform, 4. Real Chat App (Zegocloud), 5. AI Chatbot, 6. Todo App, 7. Weather App, 8. Dashboard",
"🎮 Basic Projects: 1. Calculator, 2. Tic Tac Toe, 3. Rock Paper Scissor",
"🌟 Achievements: Built & deployed multiple real-world projects 🌐, active on GitHub 📈",
"🎯 Currently: Preparing for front-end developer interviews & mastering DSA in C",
"🚀 Future Goal: Becoming a Full-stack Developer (Exploring Next.js, Node.js, MongoDB)",
"🔗 Portfolio: [https://guileless-dragon-ac8f27.netlify.app/] | GitHub: [https://github.com/911AFZAL] | LinkedIn: [Your Link]",
"This bot is his creation 🚀 —blending innovation, trust, and cultural style."
  ];


  const sendMessage = async () => {
    if (!input.trim()) return;

    // user ka message add
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // ✅ Afzal keywords check
    const lowerInput = input.toLowerCase();
    if (afzalKeywords.some(keyword => lowerInput.includes(keyword))) {
      afzalReplyLines.forEach((line, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: "assistant", content: line }]);
        }, index * 1000); // har line ke liye 1 sec delay
      });
      return; // API call skip
    }

    try {
      // 🔹 API CALL
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer sk-or-v1-ef1f45bdfacf8eaee2790c14a7773bc7f6a92a583a2f86551e09fbb27d35226c2a`, // apna key daalna
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick:free",
          messages: newMessages,
        }),
      });

      const data = await res.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const reply = data.choices[0].message;
        // assistant ka reply add
        setMessages([...newMessages, reply]);
      } else {
        // fallback response if API fails or rate limited
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "I'm experiencing some technical difficulties or rate limiting. Please try again in a moment.",
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      // fallback response
      setTimeout(() => {
        setMessages([...newMessages, { 
          role: "assistant", 
          content: "I'm experiencing some technical difficulties. Please try again in a moment." 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center max-w-4xl mx-auto rounded-lg shadow-sm border border-gray-300 overflow-hidden">
        <input
          className="flex-1 px-4 py-3 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim()}
          className={`px-4 py-3 flex items-center justify-center ${
            input.trim()
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-200 text-gray-400"
          } transition-colors duration-200`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <p className="text-xs text-center text-gray-500 mt-2">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}

export default InputBox;