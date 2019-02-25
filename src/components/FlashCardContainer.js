import React, { Component }from 'react';
import FlashCard from './FlashCard';
import Header from './layout/Header';

class FlashCardContainer extends Component {
    constructor() {
        super();
        this.state = {
            rangeValue: 1,
        }
    }

    determineRangeValue = (e) => {
        this.setState({
            rangeValue: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h2 className='flash-card-title'>FlashCards</h2>
                <section className='flash-card-section'>
                    <div className='flash-card-container'>
                        {
                            this.props.prototype.map(proto => {
                                if (proto.id === parseInt(this.state.rangeValue)) {
                                    return <FlashCard key={proto.id} proto={proto} />
                                } else {
                                    return '';
                                }
                            })
                        }
                    </div>
                        <input type='range' min='1' max='30' className='range-bar' value={this.state.rangeValue} onChange={this.determineRangeValue}></input>
                        <p className='card-number'>{this.state.rangeValue} / 30</p>
                </section>
            </div>
        )
    }
}

export default FlashCardContainer;
