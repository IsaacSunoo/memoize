import React from 'react';
import Header from '../layout/Header';

function ResultsPage(props) {
  return (
    <div>
        <Header />
        <h2 className='results-title'>Quiz Results</h2>
        <div className='results-container'>
            <div className='incorrect-container'>
                  <h4>Incorrect Questions</h4>
                {
                    props.incorrectQuestion.map(question => {
                        return <p key={question.id}>{question.id}. {question.answer}<br/>Answer: {question.prototype}</p>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ResultsPage;