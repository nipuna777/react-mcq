import React, { Component } from 'react';
import { QuestionItem } from '../components/question/item';

export class QuestionScreen extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedAnswer: null }
    }

    handleAnswerChange = changeEvent => {
        this.setState({ selectedAnswer: Number(changeEvent.target.value) });
    };

    render() {
        const question = {
            text:
                'The  most  significant  digit  (MSD)  and  the  least  significant  digit  (LSD)  of  the  number  0.1780  are respectively.',
            number: 1,
            answers: [
                {
                    text: '0 and 0'
                },
                {
                    text: '1 and 8'
                },
                {
                    text: '1 and 0'
                },
                {
                    text: '8 and 1'
                },
                {
                    text: '0 and 1'
                }
            ]
        };

        return (
            <div className="app">
                <header>
                    <h1>React MCQ</h1>
                </header>

                <QuestionItem
                    question={question}
                    selectedAnswer={this.state.selectedAnswer}
                    handleAnswerChange={this.handleAnswerChange}
                />
            </div>
        );
    }
}
