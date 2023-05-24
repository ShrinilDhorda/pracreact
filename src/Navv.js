import React, { useState } from 'react';
// import './Navbar.css'; // Import the CSS file for styling

const Navv = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };
    return (
        
        <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <div className="navbar-toggle" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">About</li>
                <li className="navbar-item">Services</li>
                <li className="navbar-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navv;
