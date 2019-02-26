import React, { Component } from 'react';

class QuizCard extends Component {
  constructor() {
    super();
    this.state = {
      correctQuestions: [],
      incorrectQuestions: [],
      correctPercent: 0
    }
  }

  displayOptions = () => {
    this.props.options.map(option => {
      return <button type='submit'>{option}</button>
    })
  }

  determineSolution = (e) => {
    console.log('taget value', e.target.value);
    console.log('prototype answer', this.props.proto.prototype);
    if (this.props.proto.prototype === e.target.value) {
      this.state.correctQuestions.push(this.props.proto);
      localStorage.setItem('correctPrototypes', JSON.stringify(this.state.correctQuestions));
      console.log(this.state.correctQuestions);
    } else {
      this.state.incorrectQuestions.push(this.props.proto);
      localStorage.setItem('incorrectPrototypes', JSON.stringify(this.state.incorrectQuestions));
      console.log(this.state.incorrectQuestions);
    }
  }


  render() {
    return (
      <div className='quiz-card'>
        <div className='question-container'>
          <p><strong>{this.props.proto.id}.</strong> {this.props.proto.answer}</p>
        </div>
        <div className='answer-container'>
          {this.props.options.map((option, idx) => {
            return <button key={idx+1} type='submit' onClick={this.determineSolution} value={option} className='quiz-btn'>{option}</button>
          })}
        </div>
      </div>
    )
  }
}

export default QuizCard;