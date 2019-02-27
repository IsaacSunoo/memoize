import React, { Component } from 'react';

class QuizCard extends Component {

  compareAnswer = (e) => {
    let { incorrectQuestions, proto, userAnswers } = this.props;
    let input = e.target.value;
    console.log(this.props);

    if (proto.prototype !== input && !incorrectQuestions.includes(proto)) {
      incorrectQuestions.push(proto);
      userAnswers.push({ userAnswer: input, id: proto.id });
    } else if (proto.prototype === input && incorrectQuestions.includes(proto)) {
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
            return <React.Fragment key={idx + 1}><label><input key={idx + 1} type='radio' onClick={this.compareAnswer} value={option} className='quiz-btn' name={this.props.proto.id} />{option}</label></React.Fragment>
          })}
        </form>
      </div>
    )
  }
}

export default QuizCard;