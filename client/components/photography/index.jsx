import React, { Component } from 'react';
import _ from 'lodash';
import ReactList from 'react-list';
import { withRouter } from 'react-router-dom';
import querySearch from "stringquery";
import MediaQuery from 'react-responsive';
import Photo from './photo';
import './photography.scss';

@withRouter
class Photography extends Component {
  state = {
    photographyData: [],
    miniPhotographyData: [],
  }

  componentWillMount() {
    this.fetchPhotographyData()
    .then((photographyData) => {
      // support anchor links
      let initialIdx;
      if (this.props.location.search) {
        let hash = querySearch(this.props.location.search)['p'];
        initialIdx = photographyData.findIndex((e) => {
          return e.url.includes(hash)
        })
      }

      this.setState({
        initialIdx,
        photographyData,
        miniPhotographyData: this.getMiniPhotographyData(_.cloneDeep(photographyData)),
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
    let { photographyData, miniPhotographyData, initialIdx } = this.state;
    if (!photographyData.length || !miniPhotographyData.length) {
      return (
        <div className="loader" />
      );
    }

    return (
      <MediaQuery query="(max-width: 599px)">
        {(matches) => {
          const data = matches ? miniPhotographyData : photographyData;
          return (
            <div className='photography'>
              <ReactList
                initialIndex={initialIdx}
                useTranslate3d={true}
                length={data.length}
                itemRenderer={matches ? this.renderPhotoMini : this.renderPhoto}
                ref={(ref) => this.reactPhotoList = ref}
              />
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

export default Photography;