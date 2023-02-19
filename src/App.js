import React from 'react'; 
import Header from './components/Header';
//Import to start using tailwind
import './App.css';

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
           <h1 className='font-serif bg-green-500'>Hello</h1>
           <Header/>
    </>
  );
}

export default App;
