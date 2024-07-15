// pages/chats/[id].js

import { useRouter } from 'next/router';
import MessageList from '../../components/MessageList';

const Chat = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Loading...</div>;

  return (
    <div>
      <MessageList chatId={id} />
    </div>
  );
};

export default Chat;
