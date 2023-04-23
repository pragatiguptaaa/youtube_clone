import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { closeMenu } from '../utils/menuSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_COMMENTS_API } from '../utils/constants';

/**
 * 1. Close Sidebar
 * 2. Show Videos
 * 3. Show Livechat
 * 4. Show Comments todo: Use API data to show real comments instead of static data
 */

const WatchComponent = () => {
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  dispatch(closeMenu());

  // const getComments = async() =>{
  //   const data = await fetch(YOUTUBE_COMMENTS_API + searchParams.get("v"));
  //   const json = await data.json();
  //   console.log(json);
  //   setComments(json); 
  // }

  // useEffect( () =>{
  //   getComments();
  // },[])

  return (
    <div>
      <div className = "flex">
        <div>
          <iframe className='p-1 m-1 shadow rounded-lg'
          width="1200"
          height="600" 
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
          </iframe>
          </div>
        <div>
            <LiveChat/>
        </div>
      </div>
      <div> 
        {/* <CommentsContainer commentsData={comments}/> */}
        <CommentsContainer/>
      </div>
    </div>
   
  )

}

export default WatchComponent;
