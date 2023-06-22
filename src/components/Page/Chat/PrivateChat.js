import React from 'react';
import Sidebar from './chatComponents/Sidebar';
import Chat from './chatComponents/Chat';
import "./PrivateChat.css"

export default function PrivateChat() {
  return (
    <div className='private-chat'>
        <div className='chat-container'>
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}
