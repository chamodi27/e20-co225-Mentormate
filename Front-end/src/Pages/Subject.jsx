import React from "react";
import Navbar from '../Components/Navbar';
import './Subject.css';
import SubjectCardBio from "../Components/SubjectCardBio";
import SubjectCardPhysics from "../Components/SubjectCardPhysics";
import SubjectCardMaths from "../Components/SubjectCardMaths";
import SubjectCardChemistry from "../Components/SubjectCardChemistry";


function Subject(){


    return(
        <>
        <Navbar className="navbar-sub" />
        <div>
            <div>
                <h1 className="main-header">Subjects</h1>
            </div>

            <div className="card-container">
                <div className="bio-container"><SubjectCardBio/></div>
                <div className="physics-container"><SubjectCardPhysics/></div>
                <div className="maths-container"><SubjectCardMaths/></div>
                <div className="chem-container"><SubjectCardChemistry/></div>

            </div>
        </div>
        
        </>
    );
}

export default Subject