// pages/index.js

import axios from 'axios';
import ChatList from '../components/ChatList';

const Home = ({ initialChats }) => {
  return (
    <div>
      <ChatList initialChats={initialChats} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
    return { props: { initialChats: response.data } };
  } catch (error) {
    return { props: { initialChats: [] } };
  }
}

export default Home;
