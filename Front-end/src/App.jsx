import { useState } from 'react';
import './App.css';
import './index.css'
import {Route, Routes} from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Explore from './Pages/Explore';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Signup from './Pages/Signup';


function App() {
  
  

  return (
    <>
    {/* This part is for the Nav bar
    <Navbar/>
    <div className='component-container'>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/account" element={<Account/>}/>
     </Routes>
    </div> 

    */}

    {/*

    
    
    
    <Signup></Signup> */}
    <Login></Login>
    

    
    
    
    </>
  );
}

export default App
