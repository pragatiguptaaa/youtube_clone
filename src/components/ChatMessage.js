import React from 'react';
import ProfileLogo from '../imgs/ProfileLogo.jpg';

const ChatMessage = ({userName, userMessage}) => {
  return (
    <div className = "flex">
      <img className ="w-12 h-12" alt ="Profile Picture.." src ={ProfileLogo}/>
      <p className='font-bold p-2'>{userName}</p>
      <p className='p-2'>{userMessage}</p>
    </div>
  )
};

export default ChatMessage;
