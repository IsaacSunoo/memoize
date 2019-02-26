import React, { Component } from 'react';

class QuizCard extends Component {
  constructor() {
    super();
    this.state = {
      correctQuestions: [],
      incorrectQuestions: []
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
      console.log(this.state.correctQuestions);
    } else {
      this.state.incorrectQuestions.push(this.props.proto);
      console.log(this.state.incorrectQuestions);
    }
  }


  render() {
    return (
      <div className='quiz-card'>
        <div className='question-container'>
          <p>{this.props.proto.id}. {this.props.proto.answer}</p>
        </div>
        <div className='answer-container'>
          {this.props.options.map(option => {
            return <button type='submit' onClick={this.determineSolution} value={option}>{option}</button>
          })}
        </div>
      </div>
    )
  }
}

export default QuizCard;