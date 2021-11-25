import React, { Component } from 'react';
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends React.Component {
    render() { 
        return (
            <div className="d-flex justify-content-around navbar">
                <Link to="/">
                   <button class="logo"><MdMenu className="pb-2"/></button>
                </Link>
                <Link to="/project">
                   <button class="hamburgerMenu"><MdMenu className="pb-2"/></button>
                </Link>
            </div>
        );
    }
}
 
export default Navbar;