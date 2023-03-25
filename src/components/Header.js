import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import HamBurger from '../imgs/HamBurger.png';
import {toggleMenu} from '../utils/menuSlice';
import YouTubeLogo from '../imgs/YouTubeLogo.png';
import ProfileLogo from '../imgs/ProfileLogo.jpg';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

//TOOD: Findout why h-8 works for img and not div.
const Header = () =>{
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  async function getSuggestions() {
     const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
     const json = data.json();
  }
  
  useEffect( () => {
    getSuggestions();
  }, [searchQuery]);


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
        <div className = 'col-span-3 flex'>
          <img className='h-10'
            alt = "Loading Menu Icon..." 
            src = {HamBurger} 
            onClick ={()=> toggleMenuHandler()}
          />
          <img className='h-10'
            alt =" Loading YouTube icon..."
            src = {YouTubeLogo}
          />
        </div>
        <div className='mx-10 px-10 col-span-6 flex justify-center'>
          <input 
            type="text" 
            className='w-10/12 h-10 border border-gray-800 rounded-l'
            value = {searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}
          />
          <button className='w-2/12 h-10  bg-gray-800 text-white rounded-r'> Search </button>
        </div>
        <div className='col-span-3'>
          <img className='h-10'
            alt="Loading Profile Icon..."
            src={ProfileLogo}
          />
        </div>
    </div>
  );
}

export default Header;