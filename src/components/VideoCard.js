import React from 'react'

const VideoCard = ({videoDetails})  =>{
  
  const {snippet, statistics} = videoDetails;
  const{channelTitle, title, thumbnails} = snippet;

  return (
    <div className = "px-4 py-2 mx-6 my-2 w-96 h-80 shadow-lg rounded-3xl">
      <img src = {thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;