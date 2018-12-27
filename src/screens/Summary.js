import React, { Component } from 'react';
import './Summary.css';

export class SummaryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAnswer: null }
    }

    render() {
        return (
            <div className={"summary-page"}>
                <div className={"summary-page__content"}>
                    <h1>Computer History</h1>
                    <span className={"completed-text"}>Completed</span>
                    <span>V Check logo</span>
                    <span className={"marks-text"}>58/72</span>
                </div>

                <div className={"page-navigation"}>
                    <button>Next</button>
                </div>
            </div>
        );
    }
}
