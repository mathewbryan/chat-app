import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from './logOut'

function Header() {
    return(
        <div>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/chat">Chat   </Link>
                <LogOut />
                
            </nav>
        </div>
    )

}

export default Header