import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/top-navbar.scss';

const TopNavbar = () => {
    return (
        <nav className="top-navbar">
            <ul className="top-navbar_row">
                <li className="top-navbar_row_item"><Link to="/help"/><img src="../assets/images/help.png"/></li>
                <li className="top-navbar_row_item"><Link to="/notifications"/><img src="../assets/images/notifications.png"/></li>
                <li className="top-navbar_row_item"><Link to="/apps"/><img src="../assets/images/apps.png"/></li>  
                <li className="top-navbar_row_item"><Link to="/user"/><img src="../assets/images/jeff-copy.png"/></li>                                              
            </ul>
        </nav>
    );
};

export default TopNavbar;