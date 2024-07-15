// pages/api/getMessages.js

import axios from 'axios';

export default async function handler(req, res) {
  const { chat_id } = req.query;
  if (!chat_id) {
    return res.status(400).json({ message: 'chat_id is required' });
  }

  try {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat_id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
  }
}
