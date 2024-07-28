import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Explore from './Pages/Explore';
import Account from './Pages/Account';
import Home from './Pages/Home';


function App() {
  
  

  return (
    <>
    <Navbar/>
    <div className='component-container'>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/account" element={<Account/>}/>
     </Routes>
    </div> 

      <Login></Login>
    
    </>
  );
}

export default App
