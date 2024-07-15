// components/ChatList.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const ChatList = ({ initialChats }) => {
  const [chats, setChats] = useState(initialChats);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/getChats?page=${page}`);
        setChats(response.data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
      setLoading(false);
    };

    if (page > 1) fetchChats();
  }, [page]);

  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default ChatList;
