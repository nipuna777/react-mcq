import React, { Component } from 'react';
import MenuItem from '../components/MenuItem/MenuItem';

import './Home.css';

export class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div className="home-banner">
                    <p>ICT past paper questions from Sri Lankan G.C.E A/L Exams</p>
                </div>

                <ul className="menu-item-list">
                    <MenuItem title="Review By Year" subtitle="Review all questions from an exam year" />
                    <MenuItem title="Review By Topic" subtitle="Review all questions by a topic" />
                    <MenuItem title="Exam Simulator" subtitle="Timed exam simulator for a given year" />
                </ul>
            </div>
        );
    }
}
