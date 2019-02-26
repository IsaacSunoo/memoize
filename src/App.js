import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import FlashCardContainer from './components/FlashCardContainer';
import QuizPage from './components/pages/QuizPage';
import CodingPage from './components/pages/CodingPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prototypes: []
    }
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/isData')
      .then(response => response.json())
      .then(proto => {
        this.setState({
          prototypes: proto.isData
        })
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/flashcards' render={() => (
            <React.Fragment>
              <FlashCardContainer prototype={this.state.prototypes} />
            </React.Fragment>
          )} />
          <Route path='/quiz' render={() => (
            <React.Fragment>
              <QuizPage prototype={this.state.prototypes} />
            </React.Fragment>
          )} />
          <Route path='/coding' component={CodingPage} />
        </div>
      </Router>
    )
  }
}

export default App;
