import WebSocketClient from "@/services/websocket";
import React, { useEffect, useState } from "react";

export interface ChatMessage {
  delivery_id: string;
  level: string;
  content: string;
  date: string;
  name: string;
}

interface ChatProps {
  wsClient: WebSocketClient;
  messages: ChatMessage[];
  setMessages: (messages: ChatMessage[]) => void;
}

const Chat = ({ wsClient, messages, setMessages }: ChatProps) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    wsClient.sendMessage({
      type: "MESSAGE",
      payload: { content: inputMessage },
    });
    setInputMessage("");
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-300 rounded p-4 mx-20">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{message.name}: </span>
            <span>{message.content}</span>
            <span className="text-xs text-gray-500 ml-2">{message.date}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe tu mensaje"
          className="flex-grow border border-gray-300 rounded p-2"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
