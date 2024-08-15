import { useState } from 'react';
import './App.css';
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Explore from './Pages/Explore';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Signup from './Pages/Signup';


function App() {
  
  

  return (
    <>
    {/* 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/account" element={<Account/>}/>
        

      </Routes>
    
    </BrowserRouter>
    */}

    
    
      <Routes>
         <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
     </Routes> 
     
    
     
  
    

    {/*

    <Login></Login>
    <Signup></Signup> 
    
    */}

    
    
    </>
  );
}

export default App
