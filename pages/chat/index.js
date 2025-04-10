import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    const res = await axios.post('/api/chat', {
      messages: [...messages, userMessage]
    });

    setMessages([...messages, userMessage, res.data]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>NMSGPT Chat</h2>
      <div style={{ marginBottom: 20 }}>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.role}:</strong> {m.content}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} style={{ width: '80%' }} />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
}
