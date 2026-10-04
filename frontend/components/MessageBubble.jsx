function MessageBubble({ sender, text }) {
  return (
    <div style={{ textAlign: sender === "user" ? "right" : "left" }}>
      <span style={{
        background: sender === "user" ? "#4CAF50" : "#eee",
        color: sender === "user" ? "#fff" : "#000",
        padding: "10px",
        borderRadius: "10px",
        display: "inline-block",
        margin: "5px"
      }}>
        {text}
      </span>
    </div>
  );
}

export default MessageBubble;