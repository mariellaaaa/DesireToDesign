import React from 'react';
import UserChats from './UserChats';
import "../PrivateChat.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <UserChats />
    </div>
  )
}
