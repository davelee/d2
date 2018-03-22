import React, { Component } from 'react';
import daveLeePng from 'assets/images/daveLee.png';
import './landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className='landing-page'>
        <img className="me-image" src={daveLeePng} style={{ height: "400px"}} />
      </div>
    );
  }
}
export default Landing;
