import './App.css'
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";

// Main App Component
export default function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">Chat Afzal Ai</h2>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-gray-600">Online</span>
          </div>
        </div>
        <ChatWindow messages={messages} />
        <InputBox setMessages={setMessages} messages={messages} />
      </div>
    </div>
  );
}