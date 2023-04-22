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
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  async function getSuggestions() {
    console.log(""+YOUTUBE_SEARCH_API + searchQuery);
     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
     const json = await data.json();
     console.log(json);
     setSuggestions(json[1]);
     console.log("suggestions:    "+suggestions);
  }
  
  useEffect( () => {
   const searchTimer = setTimeout(getSuggestions, 2000);

   return () =>{
    clearTimeout(searchTimer);
   }
  }, [searchQuery]
  );


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
        <div className='mx-10 px-10 col-span-6'>
          <div>
            <input 
              type="text" 
              className='w-10/12 h-10 border border-gray-800 rounded-l-full'
              value = {searchQuery}
              onChange = {(e) => setSearchQuery(e.target.value)}
              onFocus = {() =>setShowSuggestions(true)}
              onBlur ={() => setShowSuggestions(false)}
            />
            <button className='w-2/12 h-10  bg-gray-800 text-white rounded-r-full'> Search </button>
          </div>
          {
            showSuggestions && 
            <div className='w-[37rem] fixed border border-gray-800 shadow-lg'>
              <h1> hello</h1>
              <ul>
                { 
                  suggestions && suggestions.map((suggestion, index) =>(
                    <li key ={index} className='bg-slate-100 hover:bg-gray-200'> {suggestion}</li>
                  ))
                }         
              </ul>
            </div>
          } 
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