import React from 'react';

const questionItem = function (props) {
  const answerList = props.question.answers.map((answer  , index) => (
    <li key={index}>
      <label className={(props.selectedAnswer === index) ? 'active' : ''}>
        <input 
          type="radio" 
          name="answer"
          value={index}
          onChange={props.handleAnswerChange}
          checked={props.selectedAnswer === index}/>
        {answer.text}
      </label>
    </li>
  ))

  return (
    <div className="question">
      <p>{props.question.number}. {props.question.text}</p>
      <form>
        <ul className="question-list">
          {answerList}
        </ul>
        <button className="btn">Back</button>
        <button className="btn pull-right">Next</button>
      </form>
    </div>
  )
}

export default questionItem;