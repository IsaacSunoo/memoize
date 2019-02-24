import React, { Component } from 'react';
import Header from '../layout/Header';
import FlashCardPhrase from '../FlashCardPhrase';

class FlashCardPage extends Component {

    render() {
        // console.log(this.props.prototype);

        const flashCard = this.props.prototype.map(proto => {
            return <FlashCardPhrase key={proto.id} protoName={proto.prototype} />
        })

    return (
      <div className='flashcard-page-container'>
          <Header />
          <div className='flash-welcome'>
            <h1>Flash Cards</h1>
            {flashCard}
          </div>
      </div>
    )
  }
}

export default FlashCardPage;