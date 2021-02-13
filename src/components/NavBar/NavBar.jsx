import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <Link to="/" className="nav-link">
                About
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/discover" className="nav-link">
                Discover
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/search" className="nav-link">
                Search
            </Link>
        </li>
    </ul>
    );
}

export default NavBar;