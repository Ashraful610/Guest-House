import React from 'react';
import {  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
         < Navbar bg="dark" variant="dark">
            <div className='mx-auto '>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
             <Link className='link' to='/contact'>Contact</Link>
             <Link className='link' to='/login'>Log In</Link>
             <Link className='link' to='/signup'>Sign Up</Link>
            </div>
        </Navbar>
    );
};

export default Header;