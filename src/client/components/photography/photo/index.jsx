import React, { Component } from 'react';
import { lazyload } from 'react-lazyload';
import Img from './image';

@lazyload({
  height: '100vh',
  once: true,
  offset: 400,
})
class Photo extends React.Component {
  render() {
    const { url, caption, idx } = this.props;
    return (
      <div id={url.split('/')[3]} className="photo-wrap">
        <Img className="photo" src={url} />
        <span className="photo-caption">{caption}</span>
      </div>
    );
  }
}

export default Photo;
