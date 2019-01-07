import React from 'react';

import { FiChevronRight } from "react-icons/fi";

import './MenuItem.css';

const menuItem = function(props) {
    return (
        <li className="menu-item">
            <div className="menu-item__text">
                <div className="menu-item__text__main">{props.title}</div>
                <div className="menu-item__text__sub">{props.subtitle}</div>
            </div>
            <FiChevronRight className="menu-item__arrow" size="2em" color="var(--grey-300)" />
        </li>
    );
};

export default menuItem;
