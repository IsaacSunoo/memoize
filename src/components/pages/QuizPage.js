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
        <h1 className='quiz-title'>Prototype Quiz</h1>
        {this.props.prototype.map((proto, idx) => {
          this.state.options.push([proto.prototype, proto.incorrectChoices]);
          let merged = [].concat.apply([], this.state.options[idx]);
          for (let i = merged.length - 1; i >= 0; i--) {
            let randomIdx = Math.floor(Math.random() * (i + 1));
            let idxOption = merged[randomIdx];
            merged[randomIdx] = merged[i];
            merged[i] = idxOption;
          }
          return <QuizCard key={proto.id} proto={proto} options={merged}/>
        })
        }
      </div>
    )
  }
}

export default QuizPage;