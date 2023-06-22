import React, { useContext, useEffect, useState } from 'react';
import "../PrivateChat.css";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { useUserAuth } from '../../../../context/UserAuthContext';
import { ChatContext } from '../../../../context/ChatContext';

export default function UserChats() {
  const [chats, setChats] = useState([]);
  const { user } = useUserAuth();
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "UserChats", user.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user.uid && getChats()  
  }, [user.uid]);

  const handleSelect = (u) => {
    dispatch({type: "CHANGE_USER", payload: u});
  };

  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div className='userChat'id='user-chat' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
          <div className='userChatInfo'>
            <span className='userName'>{chat[1].userInfo.email}</span>
            <p className='lastMesage'>{chat[1].lastMessage?.text <= 20 ? chat[1].lastMessage?.text : chat[1].lastMessage?.text.substring(0, 20)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
