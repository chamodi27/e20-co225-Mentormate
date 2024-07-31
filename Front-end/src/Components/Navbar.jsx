import React, {useState} from 'react';
import './Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function Navbar() {
    

    function CustomLink({to, children,...props}){

        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});

        return(
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
        )

    }
  return (
    <>

     <nav className='navbar'>
        <Link to='/' className='app-name'>MentorMate</Link>
        <ul>
            <CustomLink to='/explore'>Explore</CustomLink>
            <CustomLink to='/account'>Account</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
            <CustomLink to='/signup'>Signup</CustomLink>
        </ul>
     </nav>   
    
    </>
  )
}

export default Navbar
