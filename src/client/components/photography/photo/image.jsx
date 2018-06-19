import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ReactImageMagnify from 'react-image-magnify';

class Image extends React.Component {
  state = {
    loaded: false
  }

  onImageLoad = () => {
    if (this.mounted) {
      this.setState({ loaded: true });
    }
  }

  componentDidMount() {
    // const imgTag = ReactDOM.findDOMNode(this.refs.img);
    // const imgSrc = imgTag.getAttribute('src');

    // const img = new window.Image();
    // img.onload = this.onImageLoad;
    // img.src = imgSrc;
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { className, ...props } = this.props;
    const imgClasses = 'image';
    const rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <ReactImageMagnify
        ref='img'
        enlargedImagePosition='over'
        imageClassName={rootClassName}
        smallImage={{
          src: props.src,
          isFluidWidth: true,
          height: window.innerHeight,
          onLoad: this.onImageLoad,
        }}
        largeImage={{
          src: props.src,
          width: 1600,
          height: 1600,
        }}
      />
    );
  }
}

export default Image;
