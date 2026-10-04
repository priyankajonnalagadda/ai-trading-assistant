import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { sendMessage } from "../api";

function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    const res = await sendMessage(input);

    const botMsg = { sender: "bot", text: res.response };
    setMessages(prev => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div>
      <div style={{ height: "400px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about stocks..."
          style={{ flex: 1 }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;