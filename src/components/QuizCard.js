import React, { Component } from 'react';

class QuizCard extends Component {
  render() {
    // console.log(this.props.options);

    return (
      <div>
        <div className='question-container'>
          {/* <p>Determine which method ...</p> */}
          <p>{this.props.proto.answer}</p>
        </div>
        <div className='answer-container'>
          {this.props.options.map(option => {
            return <button type='submit'>{option}</button>
          })}
        </div>
      </div>
    )
  }
}

export default QuizCard;