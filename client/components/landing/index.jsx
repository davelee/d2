import React, { Component } from 'react';
import daveLeePng from 'assets/images/poly1.png';
import './landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className='landing-page'>
        <img className="me-image" src={daveLeePng} />
      </div>
    );
  }
}
export default Landing;
