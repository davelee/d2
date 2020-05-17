import React, { Component } from 'react';
import Card from 'components/common/card';
import flurPng from 'assets/images/flurLogo.png';
import daveChatPng from 'assets/images/daveChat.png';
import photoBlogPng from 'assets/images/photoBlog.png';
import personalSitePng from 'assets/images/personalSite.png';
import './projects.scss';

class Projects extends Component {

  projects = [
    {
      title: 'Flur',
      description: 'An iOS app for digitally geocaching photos.',
      img: flurPng,
      backgroundStyle: { background: '#b359e0'},
      link: 'https://davelee.io/flur',
    }, {
      title: 'DaveChat',
      description: 'A chat room built with Socket.io, Express, Node, and Angular.',
      img: daveChatPng,
      backgroundStyle: { background: 'white' },
      link: 'https://davelee.io/chat',
    }, {
      title: 'Custom Photo Blog',
      description: 'A vertical scrolling, lazy loading photo blog built with React.',
      img: photoBlogPng,
      link: '/film',
    }, {
      title: 'Personal Website',
      description: "I'm talking about THIS. ES6, React, SASS, Express, Node, WebPack, AWS S3 & CloudFront, Digital Ocean.",
      img: personalSitePng,
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }
  ];

  render() {
    return (
      <div className='projects'>
        <h2 className='page-title'>Projects</h2>
        <div className='project-cards'>
          {
            this.projects.map((project) => {
              return (
                <Card
                  key={project.title} 
                  {...project}
                />
              );
            }) 
          }
        </div>
      </div>
    );
  }
}
export default Projects;
