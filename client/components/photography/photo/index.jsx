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
    this.anchorLink = 'https://davelee.io/film?p=' + this.id;
    this.state = {
      isImageLoaded: false,
    }
  }

  setImageLoaded = () => {
    this.setState({
      isImageLoaded: true
    })
  }

  getMeta = (url, caption) => {
    return {
      title: 'Dave Lee',
      description: caption,
      canonical: 'https://davelee.io',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        },
        itemProp: {
          name: 'Dave Lee',
          description: 'Dave Lee photography blog.',
          image: url
        },
        property: {
          'og:title': 'Dave Lee Photography',
          'og:type': 'article',
          'og:image': url,
          'og:site_name': 'Dave Lee Photography',
          'twitter:title': caption
        }
      },
      auto: {
        ograph: true
      }
    };
  }

  render() {
    const { url, caption } = this.props;
    const { isImageLoaded } = this.state;
    const meta = this.getMeta(url, caption);
    
    return (
      <div id={this.id} className="photo-wrap">
        <DocumentMeta {...meta} />
        <Img className="photo" src={url} setLoaded={this.setImageLoaded} />
        <span className="photo-caption">
          {caption}
        </span>
      </div>
    );
  }
}

export default Photo;
