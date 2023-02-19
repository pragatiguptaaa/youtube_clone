import React from 'react';
import {useSelector} from 'react-redux';

function SideBar() {

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className ="p-5 shadow-lg col-span-1">
        <h1 className='font-bold'>Home</h1>
        <ul>
          <li>Shorts</li>
          <li>Videos</li>
        </ul>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Games</li>
        </ul>
        <h1 className='font-bold'>Watch later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Movies</li>
          <li>Games</li>
        </ul>
    </div>
  )
}

export default SideBar;