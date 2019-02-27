import React, { Component } from 'react';
import Header from '../layout/Header';
import QuizCard from '../QuizCard';
import QuizIntro from '../QuizIntro';
import { Link } from 'react-router-dom';

class QuizPage extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
      userAnswers: [],
      quizPage: true
    }
  }

  addToLocalStorage = () => {
    this.props.incorrectQuestions.sort((a, b) => {
      return a.id - b.id;
    });

    localStorage.setItem('incorrectQuestions', JSON.stringify(this.props.incorrectQuestions));
  }

  displayQuiz = () => {
    this.setState({
      quizPage: !this.state.quizPage
    })
  }

  render() {
    const displayQuiz = this.state.quizPage ? { display: 'none' } : {};
    return (
      <div>
        <Header />
        {
          this.state.quizPage === true &&
          <QuizIntro display={this.displayQuiz}/>
        }
        <div style={displayQuiz}>
          <h1 className='quiz-title'>Prototype Quiz</h1>
          {console.log('props', this.props)
          }
          {this.props.prototype.map((proto, idx) => {
            this.state.options.push([proto.prototype, proto.incorrectChoices]);
            let merged = [].concat.apply([], this.state.options[idx]);
            for (let i = merged.length - 1; i >= 0; i--) {
              let randomIdx = Math.floor(Math.random() * (i + 1));
              let idxOption = merged[randomIdx];
              merged[randomIdx] = merged[i];
              merged[i] = idxOption;
            }
            return <QuizCard key={proto.id} proto={proto} options={merged} incorrectQuestions={this.props.incorrectQuestions} determineSolution={this.determineSolution} userAnswers={this.state.userAnswers}/>
          })
        }
          <div className='results-btn-container'>
            <Link className='results-btn' onClick={this.addToLocalStorage} to={{ pathname: '/results', props: {incorrectQuestions: this.props.incorrectQuestions, userAnswers: this.state.userAnswers} }}>Submit Quiz</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default QuizPage;