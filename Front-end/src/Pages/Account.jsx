import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import './Account.css';

function Account() {
    const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/80");

    const handleEditClick = (field) => {
        alert(`Edit ${field} clicked`);
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePicture(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <>
            <Navbar />
            <h1 className="main-header-acc">Hi, first_name</h1>

            <div className="account-page-container">
                <div className="sidebar">
                    <label htmlFor="profile-picture-upload">
                        <img src={profilePicture} alt="Profile" className="profile-picture"/>
                    </label>
                    <input
                        id="profile-picture-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        style={{ display: 'none' }}
                    />
                    <h2>Firstname Lastname</h2>
                    <p>name@gmail.com</p>
                    <ul>
                        <li className="active"><a href="#">My Profile</a></li>
                        <li><a href="#">Billing & Payments</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="prof-header">
                        <h1>My Profile</h1>
                        <button>Sign out</button>
                    </div>
                    <p>Manage your personal information, including phone numbers and email addresses where you can be contacted.</p>
                    <div className="card-container">
                        <div className="card-acc">
                            <div className="card-icon">👤</div>
                            <div>
                                <div className="card-title">Name</div>
                                <div className="card-text">Your name</div>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditClick('Name')}>Edit</button>
                        </div>
                        <div className="card-acc">
                            <div className="card-icon">📅</div>
                            <div>
                                <div className="card-title">Date of Birth</div>
                                <div className="card-text">07 July 2005</div>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditClick('Date of Birth')}>Edit</button>
                        </div>
                        <div className="card-acc">
                            <div className="card-icon">🌐</div>
                            <div>
                                <div className="card-title">Address</div>
                                <div className="card-text">Give your address here</div>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditClick('Country Region')}>Edit</button>
                        </div>
                        <div className="card-acc">
                            <div className="card-icon">🔤</div>
                            <div>
                                <div className="card-title">Language</div>
                                <div className="card-text">English (UK) - English</div>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditClick('Language')}>Edit</button>
                        </div>
                        <div className="card-acc">
                            <div className="card-icon">📧</div>
                            <div>
                                <div className="card-title">Contactable at</div>
                                <div className="card-text">ikakodesign@gmail.com</div>
                            </div>
                            <button className="edit-btn" onClick={() => handleEditClick('Contactable at')}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;
