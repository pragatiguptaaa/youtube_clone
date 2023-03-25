import React from 'react'

const VideoCard = ({videoDetails})  =>{
  
  const {snippet, statistics} = videoDetails;
  const{channelTitle, title, thumbnails} = snippet;

  return (
    <div className = "p-4 m-4 w-96 h-80 shadow-lg rounded-2xl">
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