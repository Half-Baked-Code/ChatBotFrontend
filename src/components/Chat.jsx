import React, { useState } from 'react';
import { FaComments, FaBook, FaUser, FaRobot, FaClipboardList } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';


const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi there! I'm StudyBot, your AI study assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const sendMessage = async () => {
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
  const userQuestion = input; // Capture the question
  setInput('');

  // ✅ Send to backend (currently mocked)
  try {
    const payload = {
      question: userQuestion,
      timestamp: new Date().toISOString()
    };

    console.log("Sending payload to API:", payload);
    const start = Date.now();

    const response = await fetch('http://127.0.0.1:8000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const elapsed = Date.now() - start;

// Wait extra time if needed to reach 1.5s total
if (elapsed < 1500) {
  await new Promise(resolve => setTimeout(resolve, 1500 - elapsed));
}
    // Fake fallback if API isn't ready
    const botReply = data?.reply || "Thanks for your message! I am working on it.";

    const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const botResponse = { from: 'bot', text: botReply, time: botTime };

    setMessages(prev => {
      const updated = [...prev];
      updated.pop(); // remove loading
      return [...updated, botResponse];
    });
  } catch (error) {
    console.error("API error:", error);
    const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => {
      const updated = [...prev];
      updated.pop(); // remove loading
      return [
        ...updated,
        {
          from: 'bot',
          text: "Sorry, something went wrong while processing your question.",
          time: botTime,
        }
      ];
    });
  }
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
      <div className={`message ${msg.from}`}>
  {typeof msg.text === 'string' ? (
    <ReactMarkdown>{msg.text}</ReactMarkdown>
  ) : (
    msg.text
  )}
</div>
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
  <div className="mic-icon" onClick={() => alert("Mic clicked - integrate speech input here!")}>
    <FaMicrophone size={18} />
  </div>
  <button onClick={sendMessage}>Send</button>
</div>

    </div>
  );
};

export default Chat;
