import React, { Component } from 'react';

class QuizCard extends Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

  displayOptions = () => {
    this.props.options.map(option => {
      return <button type='submit'>{option}</button>
    })
  }

  determineSolution = (e) => {
    console.log('taget value', e.target.value);
    console.log('prototype answer', this.props.proto.prototype);
    if (this.props.proto.prototype === e.target.value) {
      this.props.correctQuestions.push(this.props.proto);
      localStorage.setItem('correctPrototypes', JSON.stringify(this.props.correctQuestions));
      console.log(this.props.correctQuestions);
    } else {
      this.props.incorrectQuestions.push(this.props.proto);
      localStorage.setItem('incorrectPrototypes', JSON.stringify(this.props.incorrectQuestions));
      console.log(this.props.incorrectQuestions);
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