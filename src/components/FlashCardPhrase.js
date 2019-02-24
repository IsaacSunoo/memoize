import React from 'react';

function FlashCardPhrase(props) {
    console.log(props);

  return (

    <div className='frontside-card'>
        <h5>
            {props.protoName}
        </h5>
    </div>
  )
}
export default FlashCardPhrase;