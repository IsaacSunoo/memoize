import React, { Component } from 'react';

class QuizCard extends Component {

  compareAnswer = (e) => {
    let { incorrectQuestions, proto, userAnswers } = this.props;
    let input = e.target.value;
    console.log('quiz card', proto);

    const isIncorrectQuestion = incorrectQuestions.find(question => {
      return question.id === proto.id;
    })

    if (proto.prototype !== input && !isIncorrectQuestion) {
      incorrectQuestions.push(proto);
      userAnswers.push({ userAnswer: input, id: proto.id });
    } else if (proto.prototype === input && isIncorrectQuestion) {
      let idx = incorrectQuestions.indexOf(proto);
      incorrectQuestions.splice(idx, 1);
    }
  }

  render() {
    return (
      <div className='quiz-card'>
        <div className='question-container'>
          <p><strong>{this.props.proto.id}.</strong> {this.props.proto.answer}</p>
        </div>
        <form className='answer-container'>
          {this.props.options.map((option, idx) => {

            return <label key={idx + 1}><input key={idx + 1} type='radio' onClick={this.compareAnswer} value={option} className='quiz-btn' name={this.props.proto.id} />{option}</label>
          })}
        </form>
      </div>
    )
  }
}

export default QuizCard;