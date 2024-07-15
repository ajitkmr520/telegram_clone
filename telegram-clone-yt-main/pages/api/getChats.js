// pages/api/getChats.js

import axios from 'axios';

export default async function handler(req, res) {
  const { page = 1 } = req.query;
  try {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch chats', error: error.message });
  }
}
