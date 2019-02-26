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


  // determineSolution = (e) => {
  //   console.log(e.target.value);
  //   console.log(this.props.prototype.prototype);
  //   if (this.props.prototype.prototype === e.target.value) {
  //     console.log('Correct Answer');
  //     this.state.correctQuestions.push(this.props.proto);
  //     console.log(this.state.correctQuestions);
  //   } else {
  //     console.log('Incorrect Answer');
  //     this.state.incorrectQuestions.push(this.props.proto);
  //     this.props.incorrectCounter++;
  //     console.log(this.state.incorrectQuestions);

  //   }

  // }

  render() {
    return (
      <div>
        <Header />
        <h1>Quiz Page</h1>
        {this.props.prototype.map((proto, idx) => {
          this.state.options.push([proto.prototype, proto.incorrectChoices]);
          let merged = [].concat.apply([], this.state.options[idx]);
          let ctr = merged.length, tempVal, randomIdx;
          randomIdx = Math.floor(Math.random() * ctr);
          ctr--;
          tempVal = merged[ctr];
          merged[ctr] = merged[randomIdx];
          merged[randomIdx] = tempVal;
          return <QuizCard key={proto.id} proto={proto} options={merged}/>
        })
        }
      </div>
    )
  }
}

export default QuizPage;