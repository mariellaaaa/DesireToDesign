import React, { useContext } from 'react';
import "../PrivateChat.css";
import Messages from './Messages';
import InputMessage from './InputMessage';
import { ChatContext } from '../../../../context/ChatContext';

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.email}</span>
      </div>
        <Messages />
        <InputMessage />
    </div>
  )
}
