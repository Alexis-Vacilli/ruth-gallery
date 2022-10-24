import React from 'react';
import {RiMenu2Line} from 'react-icons/ri';
import './Navbar.scss';

const Navbar = ({handleToggle}) => {
    return (
        <div className="app__navbar">
            <RiMenu2Line className="menu-icon" onClick={handleToggle}/>
        </div>
    )
}

export default Navbar
