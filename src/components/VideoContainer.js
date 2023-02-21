import React from 'react'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import { MOST_POPULAR_VIDEOS_YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

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
          <Link key ={video.id} to ={"/watch?v="+video.id}>
            <VideoCard  videoDetails={video} />
          </Link>
        )
      }
    </div>
    
  );
}

export default VideoContainer;