import React from 'react'
import VideoCard from './VideoCard';


//Example to show high order component -- A compoenet which takes another compoenet as input and returns a compoenet.
const AdVideoCard = ({videoDetails})  =>{
  
  return (
    <div className = "rounded-3xl border border-red-800">
      <VideoCard videoDetails ={videoDetails}/>
    </div>
  )
}

export default VideoCard;