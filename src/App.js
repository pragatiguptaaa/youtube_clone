import React from 'react'; 
//Import to start using tailwind
import './App.css';

import Header from './components/Header';
import Body from './components/Body';


/**
 * 1. Header
 * 2. Body
 *   2.1. SideBar 
 *   2.2. Main Component
 *        2.2.1. Button List
 *        2.2.2. VideoContainer
 *               VideoCard(Click -> Watch Page)
 */

function App() {
  return (
    <>
           <Header/>
           <Body/>
    </>
  );
}

export default App;
