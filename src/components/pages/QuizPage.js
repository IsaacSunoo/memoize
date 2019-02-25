import React, { Component } from 'react';
import Header from '../layout/Header';
import QuizCard from '../QuizCard';

class QuizPage extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Quiz Page</h1>
        {this.props.prototype.map((proto, idx) => {
          this.state.options.push([proto.prototype, proto.incorrectChoices]);
          let merged = [].concat.apply([], this.state.options[idx]);
          let currIdx = merged.length, tempVal, randomIdx;
          randomIdx = Math.floor(Math.random() * currIdx);
          currIdx--;
          tempVal = merged[currIdx];
          merged[currIdx] = merged[randomIdx];
          merged[randomIdx] = tempVal;
          console.log([merged]);
          return <QuizCard key={proto.id} proto={proto} options={merged}/>
        })
        }
      </div>
    )
  }
}

export default QuizPage;