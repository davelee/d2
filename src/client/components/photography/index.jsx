import React, { Component } from 'react';
import ReactList from 'react-list';
import MediaQuery from 'react-responsive';
import Photo from './photo';
import './photography.scss';

class Photography extends Component {
  state = {
    photographyData: [],
    miniPhotographyData: [],
  }

  componentWillMount() {
    this.fetchPhotographyData()
    .then((photographyData) => {
      this.setState({ 
        photographyData,
        miniPhotographyData: this.getMiniPhotographyData(photographyData.slice(0)),
      });
    });
  }

  fetchPhotographyData = () => {
    return window.fetch('/api/photography').then((res) => {
      return res.json().then((body) => {
        return body;
      });
    });
  }

  getMiniPhotographyData = (photographyData) => {
    return photographyData.map((item) => {
      const url = new URL(item.url);
      const miniPath = "/mini" + url.pathname;
      item.url = url.origin + miniPath;
      return item;
    });
  }

  renderPhoto = (idx, key) => <Photo key={key} idx={idx} {...this.state.photographyData[idx]} />
  
  renderPhotoMini = (idx, key) => <Photo key={key} idx={idx} {...this.state.miniPhotographyData[idx]} />

  render() {
    let { photographyData, miniPhotographyData } = this.state;
    if (!photographyData || !miniPhotographyData) {
      return (
        <div style={{background: 'black', color: 'white'}}>
          loading...
        </div>
      );
    }
    return (
      <MediaQuery query="(max-width: 599px)">
        {(matches) => {
          const data = matches ? miniPhotographyData : photographyData;
          return (
            <div className='photography'>
              <ReactList
                useTranslate3d={true}
                itemSizeGetter={() => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
                length={data.length}
                itemRenderer={matches ? this.renderPhotoMini : this.renderPhoto}
              />
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

export default Photography;
