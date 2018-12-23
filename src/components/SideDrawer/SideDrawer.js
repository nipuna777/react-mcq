import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => {

    let drawerClass = "side-drawer"
    if (props.isOpen) {
        drawerClass = "side-drawer open"
    }

    return (
        <nav className={drawerClass}>
            <ul>
                <li>
                    <Link to="/question">Questions</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
};

export default sideDrawer;
