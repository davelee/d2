import React, { Component } from 'react';
import ReactList from 'react-list';
import Photo from './photo';
import './photography.scss';

class Photography extends Component {
  state = {
    photographyData: [],
  }

  componentWillMount() {
    let photographyData = [];
    this.fetchPhotographyData()
    .then((photographyData) => {
      this.setState({ photographyData });
    });
  }

  fetchPhotographyData = () => {
    return window.fetch('/api/photography').then((res) => {
      return res.json().then((body) => {
        return body;
      });
    });
  }

  renderPhoto = (idx, key) => <Photo key={key} idx={idx} {...this.state.photographyData[idx]} />

  render() {
    const { photographyData } = this.state;
    if (!photographyData) {
      return (
        <div style={{background: 'black', color: 'white'}}>
          loading...
        </div>
      );
    }
    return (
      <div className='photography'>
        <ReactList
          useTranslate3d={true}
          itemSizeGetter={() => Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
          length={photographyData.length}
          itemRenderer={this.renderPhoto}
        />
      </div>
    );
  }
}

export default Photography;
