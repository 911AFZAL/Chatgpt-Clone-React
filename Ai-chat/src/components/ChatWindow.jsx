// ChatWindow Component
function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h2 className="text-2xl text-gray-800 mb-2">🤖 This is <b>ChatGPT Clone + Afzal Special</b> 🎉 <br />
💬 Ask anything (ChatGPT API will reply) <br />
✨ Or type <b>"Afzal"</b> to see details about its creator 🚀</h2>
           </div>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-6 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-3/4 rounded-2xl p-4 shadow-sm ${
                msg.role === "user" 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-none" 
                  : "bg-white border border-gray-200 rounded-bl-none"
              }`}
            >
              <div className="flex items-center mb-1">
                <div className={`w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs ${
                  msg.role === "user" ? "bg-blue-600" : "bg-purple-100 text-purple-600"
                }`}>
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <span className="text-xs font-medium">
                  {msg.role === "user" ? "You" : "Assistant"}
                </span>
              </div>
              <p className="mt-1">{msg.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default ChatWindow