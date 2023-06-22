import React, { useContext, useState } from 'react';
import "../PrivateChat.css";
import { useUserAuth } from '../../../../context/UserAuthContext';
import { ChatContext } from '../../../../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import {v4 as uuid } from "uuid";
import { db } from '../../../../firebase';

export default function InputMessage() {
  const [text, setText] = useState("");

  const { user } = useUserAuth();
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    
    await updateDoc(doc(db, "Chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.uid,
        date: Timestamp.now(),
      }),
    });

    await updateDoc(doc(db, "UserChats", user.uid), {
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    await updateDoc(doc(db, "UserChats", data.user.uid), {
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    });

    setText("");
  };
  return (
    <div className='input'>
      <input className="message-input" type="text" placeholder='Message' onChange={(e) => setText(e.target.value)} value={text}/>
      <div className='send'>
        <button onClick={handleSend} className='btn btn-primary'>Send</button>
      </div>
    </div>
  )
}
