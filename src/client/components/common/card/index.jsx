import React, { Component } from 'react';
import './card.scss';

class Card extends Component {
  render() {
    const { props } = this;

    return (
      <div className='card'>
        <div className='img-wrap' style={props.backgroundStyle}>
          <img src={props.img} />
        </div>
        <div className='desc-wrap'>
          <a href={props.link} target="_blank"><h3>{props.title}</h3></a>
          <p>{props.description}</p>
        </div>
      </div>
    );
  }
}
export default Card;
