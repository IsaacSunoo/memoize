import React from 'react';
import Header from '../layout/Header';
import LandingInstructions from '../LandingInstructions';

function LandingPage() {
  return (
    <div>
      <Header />
      <div className='main-instructions'><LandingInstructions /></div>
      {/* <img src='../../images/computer.jpeg'></img> */}

    </div>
  )
}

export default LandingPage;