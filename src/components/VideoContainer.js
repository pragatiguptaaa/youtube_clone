import React from 'react'
import {useState, useEffect} from "react";

import { MOST_POPULAR_VIDEOS_YOUTUBE_API } from '../constants';
import VideoCard from './VideoCard';

function VideoContainer() {

  const [videos, setVideos] = useState(null);

  async function getVideos(){
  const data = await fetch(MOST_POPULAR_VIDEOS_YOUTUBE_API)
  const json = await data.json();
  setVideos(json.items);
  console.log(videos);
  console.log(videos?.[0]);
  }

  useEffect(()=>{
    getVideos();
  },[]);


  //TODO: Add shimmer
  return (
    <div className='flex flex-wrap'>
      {
        videos !=null &&  videos.map((video) =>
        <VideoCard key ={video.id} videoDetails={video} />
        )
      }
    </div>
    
  );
}

export default VideoContainer;