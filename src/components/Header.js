import React from 'react';
import HamBurger from '../imgs/HamBurger.png';
import YouTubeLogo from '../imgs/YouTubeLogo.png';
import ProfileLogo from '../imgs/ProfileLogo.jpg';


//TOOD: Findout why h-8 works for img and not div.
function Header() {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
        <div className = 'col-span-2 flex'>
          <img className='h-10'
           alt = "Loading Menu Icon..." 
            src = {HamBurger} 
          />
          <img className='h-10'
            alt =" Loading YouTube icon..."
            src = {YouTubeLogo}
          />
        </div>
        <div className='col-span-10 flex justify-center'>
          <input type="text" className='w-1/2 h-10 border border-gray-800   rounded-l'/>
          <button className='h-10  bg-gray-800 text-white rounded-r'> Search</button>
        </div>
        <div className='col-span-2'>
          <img className='h-10'
            alt="Loading Profile Icon..."
            src={ProfileLogo}
          />
        </div>
    </div>
  );
}

export default Header;