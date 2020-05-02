import React, { Component } from 'react';
import './card.scss';

class Card extends Component {
  render() {
    const { props } = this;

    return (
      <div className='card'>
        <a className="card-link" href={props.link} target="_blank">
          <div className='img-wrap' style={props.backgroundStyle}>
            <img src={props.img} />
          </div>
          <div className='desc-wrap'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </a>
      </div>
    );
  }
}
export default Card;
