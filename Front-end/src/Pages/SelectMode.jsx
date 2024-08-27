import React from 'react';
import './SelectMode.css';

function SelectMode() {
  return (
    <div className="selectmode-container">
        <div class= "page-header">
            <h1 >Select Mode</h1>
        </div>
        <div className="selectmode-box">
            <div className="selectmode-option left">
                <h2>Check Your Knowledge</h2>
                <p>by answering model questions</p>
                <button className="selectmode-btn">Start Now</button>
            </div>
            <div className="selectmode-option right">
                <h2>Ask Your Questions</h2>
                <p>from our AI powered personal tutor</p>
                <button className="selectmode-btn">Ask Now</button>
            </div>
        </div>
      {/* <div className="profile-icon">
        <img className="profile-img" src="/path/to/profile.png" alt="Profile" />
        <p>Name</p>
      </div> */}
    </div>
  );
}

export default SelectMode;
