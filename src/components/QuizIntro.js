import React, { Component } from 'react'

class QuizIntro extends Component {

  render() {
      return (
          <div>
              <p>Test your knowledge on array prototypes.</p>
              <p>Each question provides a definition for a specific array prototype.</p>
              <p>Determine which one belongs to the definition</p>
              <p>Are you ready?</p>
              <button type='submit'>Begin Quiz</button>
          </div>
      )
  }
}

export default QuizIntro;