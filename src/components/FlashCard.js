import React, { Component } from 'react';

class FlashCard extends Component {
    constructor() {
        super();
        this.state = {
            cardSide: 'phrase'
        }
    }

    rotateCard = () => {
        console.log('rotate card clicked');
        if (this.state.cardSide === 'phrase') {
            this.setState({
                cardSide: 'answer'
            })
        } else {
            this.setState({
                cardSide: 'phrase'
            })
        }
    }

    render() {
        let cardRotate;

        if (this.state.cardSide === 'phrase') {
            cardRotate = { transform: 'rotateY(0deg)' }
        } else {
            cardRotate = { transform: 'rotateY(180deg)' }
        }

        return (
            <div className='card-shadow'>
                <div className='main-card' style={cardRotate} onClick={this.rotateCard}>
                    <div className='phrase-card'>
                        <h5>
                            {this.props.proto.prototype}
                        </h5>
                    </div>
                    <div className='answer-card'>
                        <h6>
                            {this.props.proto.answer}
                        </h6>
                        <p>
                            Method Type: {this.props.proto.method}
                        </p>
                        <p>
                            Reference Link: <a href={this.props.proto.link}>Learn More</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlashCard;