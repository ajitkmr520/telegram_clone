// components/MessageList.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const MessageList = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/getMessages?chat_id=${chatId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
      setLoading(false);
    };

    fetchMessages();
  }, [chatId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
