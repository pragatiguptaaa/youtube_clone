import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessages } from '../utils/liveChatSlice';

import ChatMessage from './ChatMessage';
import { generateRandomName, generateRandomMessage } from '../utils/helperFunctions';

 //TODO: Do API polling instead of using static data
  // useEffect(() =>{
  //   const interval = setInterval(() =>{
  //       //API polling
  //   }, 2000)
  //   return () => {clearInterval(interval);}
  // }, []);

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChat.chatMessages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() =>{

    const interval = setInterval(() =>{
        dispatch(addChatMessages({name: generateRandomName(), message: generateRandomMessage(20)}))
    }, 2000)
    return () => {clearInterval(interval);}

  }, []);

  return (
    <div>
      <div className= "w-72 h-[600px] m-2 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
      {
        chatMessages.map( (chatMessage, index) => (
            <ChatMessage key = {index} userName = {chatMessage.name} userMessage = {chatMessage.message}/>
      ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addChatMessages({
              name: "Pragati Gupta",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  )
};

export default LiveChat;
