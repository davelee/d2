import React, { Component } from 'react';
import { lazyload } from 'react-lazyload';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DocumentMeta from 'react-document-meta';
import linkIcon from 'assets/images/link-icon.png'
import Img from './image';

@lazyload({
  height: '100vh',
  once: true,
  offset: 400,
})
class Photo extends React.Component {
  constructor(props) {
    super(props)
    let arrPath = props.url.split('/');
    this.id = arrPath[arrPath.length-1];
    this.anchorLink = 'https://davelee.io/photography#' + this.id;
    this.state = {
      isImageLoaded: false,
    }
  }

  setImageLoaded = () => {
    this.setState({
      isImageLoaded: true
    })
  }

  render() {
    const { url, caption } = this.props;
    const { isImageLoaded } = this.state;
    
    return (
      <div id={this.id} className="photo-wrap">
        <Img className="photo" src={url} setLoaded={this.setImageLoaded} />
        <span className="photo-caption">
          {caption}
        </span>
        {isImageLoaded && 
          <CopyToClipboard text={this.anchorLink}
            onCopy={() => this.setState({copied: true})}>
            <span className='copy-link'>
              {this.state.copied && <span className="copied-text">copied!</span>}
              <img src={linkIcon} />
            </span>
          </CopyToClipboard>
        }
      </div>
    );
  }
}

export default Photo;
