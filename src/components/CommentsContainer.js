import React from 'react';
import { commentsData } from '../utils/staticData';
import ProfileLogo from "../imgs/ProfileLogo.jpg"

const Comment = ({userName, userComment}) =>{
 return(
    <div className = "flex bg-gray-100 round">
      <img className ="w-12 h-12" alt ="Profile Picture.." src ={ProfileLogo}/>
      <p className='font-bold p-2'> {userName} </p>
      <p className='p-2'>{userComment}</p>
      </div>
 );
};

const CommentList = ({commentsData}) => {
  return(
    commentsData.length !=0 && commentsData.map((commentData, index)=>
    (
      <div key ={index}>
        <Comment userName ={commentData.name} userComment={commentData.comment}/>
        <div className="px-5 mx-5 py-2 border border-black-l">
          <CommentList commentsData = {commentData.replies}/>
        </div>
      </div>
  )));
  };


const CommentsContainer = () => {
  return (
      <div className = "m-5 p-2">
        <h2 className='text-2xl font-bold'>Comments</h2>
        <CommentList commentsData ={commentsData}/>
      </div>
  );
};

export default CommentsContainer;
