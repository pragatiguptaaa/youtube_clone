import React from 'react';
import SideBar from './SideBar';
import MainComponent from './MainComponent';

function Body() {
  return (
    <div className = "grid grid-flow-col">
        <SideBar/>
        <MainComponent/>
    </div>
    
  )
}

export default Body;