import React, { useContext, useEffect, useState } from 'react'
import UsersMessage from './UsersMessage';
import "../PrivateChat.css";
import { ChatContext } from '../../../../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase';

export default function Messages() {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "Chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map((m) => (
        <UsersMessage message={m} key={m.id} />
      ))}
    </div>
  );
};
