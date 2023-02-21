import React from 'react'

const VideoCard = ({videoDetails})  =>{
  
  const {snippet, statistics} = videoDetails;
  const{channelTitle, title, thumbnails} = snippet;

  return (
    <div className = "p-2 m-2 w-72 shadow-lg rounded-md">
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