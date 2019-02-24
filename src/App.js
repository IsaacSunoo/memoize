import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import prototypes from './dataset/arrayPrototypes';
import FlashCardContainer from './components/FlashCardContainer';
import QuizPage from './components/pages/QuizPage';
import CodingPage from './components/pages/CodingPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prototypes
    }

  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/flashcards' render={props => (
            <React.Fragment>
              <FlashCardContainer prototype={this.state.prototypes} />
            </React.Fragment>
          )} />
          <Route path='/quiz' component={QuizPage} />
          <Route path='/coding' component={CodingPage} />
        </div>
      </Router>
    )
  }
}

export default App;
