import React from 'react';
import Header from '../layout/Header';

function ResultsPage(props) {
  return (
    <div>
        <Header />
        <h2 className='results-title'>Quiz Results</h2>
        <div className='results-container'>
            <div className='correct-container'>
                <h4 >Correct Questions</h4>
                {
                    props.location.state.correctQuestions.map(question => {
                        console.log(question.answer)
                        return <p key={question.id}>{question.id}. {question.answer} <br/>Answer: {question.prototype}</p>
                    })
                }
            </div>
            <div className='incorrect-container'>
                <h4>Incorrect Questions</h4>
                {
                    props.location.state.incorrectQuestions.map(question => {
                        return <p key={question.id}>{question.id}. {question.answer}<p>Answer: {question.prototype}</p></p>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ResultsPage;