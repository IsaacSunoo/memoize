import React from 'react'

function QuizIntro(props) {
      return (
        <div className='quiz-intro-container'>
            <div className='quiz-intro'>
                <p>Test your knowledge on array prototypes.<br />
                    Each question provides a definition for a specific array prototype.<br />
                    Determine which prototype belongs to the definition<br />
                    Are you ready?</p>
            </div>
            <div className='start-quiz'>
                <button type='submit' onClick={props.display} className='start-quiz-btn'>Begin Quiz</button>
            </div>
        </div>
      )
}

export default QuizIntro;