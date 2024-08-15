import { BrowserRouter, Routes, Link } from "react-router-dom";
import React, { useState } from 'react';
import BioMainUnit from "./BioMainUnit";
import Subject from "./Subject";
import Navbar from "../Components/Navbar";

function Explore() {
    const [showSubject, setShowSubject] = useState(false);

    return (
        <>

        <Subject/>

        
         {/* <BioMainUnit/>*/}   
       
            
        </>
    );
}

export default Explore;
