import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const Toolbar = props => (
    <header>
        <nav className="nav-bar">
            <DrawerToggleButton className="nav-bar__hamburger"></DrawerToggleButton>
            <div className="nav-bar__logo">
                <Link to="/">React MCQ</Link>
            </div>
            <ul className="nav-bar__items">
                <li>
                    <Link to="/question">Questions</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Toolbar;