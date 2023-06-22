import React, { useContext, useEffect, useRef } from 'react';
import "../PrivateChat.css";
import { useUserAuth } from '../../../../context/UserAuthContext';
import { ChatContext } from '../../../../context/ChatContext';
import SimpleDateTime from 'react-simple-timestamp-to-date';


export default function UsersMessage({message}) {

  const { user } = useUserAuth();
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message]);

  return (
    <div ref={ref} className={`message ${message.senderId === user.uid && "owner"}`}>
      <div className='message-info'>
        <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{message.date.seconds}</SimpleDateTime>
      </div>
      <div className='message-content'>
        <p className='user-message'>{message.text}</p>
      </div>
    </div>
  )
}
