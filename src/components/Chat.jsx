import React, { useState } from 'react';
import { FaComments, FaBook, FaUser, FaRobot, FaClipboardList } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi there! I'm StudyBot, your AI study assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
  if (!input.trim()) return;

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const userMessage = { from: 'user', text: input, time };

  const loadingMessage = {
    from: 'bot',
    text: (
      <div className="typing-dots">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
    ),
    time: ''
  };

  setMessages(prev => [...prev, userMessage, loadingMessage]);
  setInput('');

  setTimeout(() => {
    const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const botResponse = {
      from: 'bot',
      text: "Thanks for your message! I am working on it.",
      time: botTime
    };

    setMessages(prev => {
      const updated = [...prev];
      updated.pop(); // remove loading message
      return [...updated, botResponse];
    });
  }, 2000); // 2 seconds
};
  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
  <div key={index} className={`message-container ${msg.from}`}>
    <div className="message-icon">
      {msg.from === 'user' ? <FaUser size={16} /> : <FaRobot size={16} />}
    </div>
    <div className="bubble-timestamp">
      <div className={`message ${msg.from}`}>{msg.text}</div>
      <div className="timestamp">{msg.time}</div>
    </div>
  </div>
))}

      </div>
      <div className="input-area">
  <div className="input-icon">
    <FaUser size={18} />
  </div>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Ask StudyBot anything..."
  />
  <button onClick={sendMessage}>Send</button>
</div>
    </div>
  );
};

export default Chat;
