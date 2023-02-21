import React from 'react';
import { useDispatch } from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import { closeMenu } from '../utils/menuSlice';

/**
 * 1. Close Sidebar
 * 2. Show Videos
 */

const WatchComponent = () => {

  const dispatch = useDispatch();
  dispatch(closeMenu());

  const [searchParams] = useSearchParams();

  return (
    <div className='p-1 m-1 shadow rounded-lg'>
      <iframe 
      width="1200"
      height="600" 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
      </iframe>
    </div>
  )

}

export default WatchComponent;
