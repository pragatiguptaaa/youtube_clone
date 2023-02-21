import React from 'react'; 
import { Provider } from 'react-redux';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
//Import to start using tailwind
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import MainComponent from './components/MainComponent';
import store from "./utils/store";
import WatchComponent from './components/WatchComponent';


/**
 * 1. Header
 * 2. Body
 *   2.1. SideBar 
 *   2.2. Main Component
 *        2.2.1. Button List
 *        2.2.2. VideoContainer
 *               VideoCard(Click -> Watch Page)
 */

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"",
      element:<MainComponent/>
      }, 
      {
        path:"watch",
        element:<WatchComponent/>
      }
    ]
  }
]);


const  App = () => {
  return (
    <>
    <Provider store ={store}>
           <Header/>
           <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
    </>
  );
}






export default App;
