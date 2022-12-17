import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const {data} = await axios.get('/api/chat');
    setChats(data);
  };

  useEffect( () => {
    fetchChats();
  }, [])

  return (
    <div>
      {chats.map((el) => (
        <h3 key={el._id}>{el.chatName}</h3>
      ))}
    </div>
  );
};

export default ChatPage;