import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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
    const imgTag = ReactDOM.findDOMNode(this.refs.img);
    const imgSrc = imgTag.getAttribute('src');

    const img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { className, ...props } = this.props;
    const rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
}

export default Image;
