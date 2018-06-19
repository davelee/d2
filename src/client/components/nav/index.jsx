import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Baffle from 'baffle-react';
import './nav.scss';

@withRouter
class Nav extends Component {
  constructor() {
    super();
    const obfuscate = {};
    this.getNavItems().map(item => {
      obfuscate[item.to] = true;
    });
    this.state = { obfuscate };
  }

  getNavItems = () => {
    return [
      {
        to: '/',
        title: 'Dave Lee',
        onMouseEnter: this.onMouseEnter.bind(this, '/'),
        onMouseLeave: this.onMouseLeave.bind(this, '/'),
      },
      {
        to: '/about',
        title: 'about',
        onMouseEnter: this.onMouseEnter.bind(this, '/about'),
        onMouseLeave: this.onMouseLeave.bind(this, '/about'),
      },
      {
        to: '/feed',
        title: 'feed',
        onMouseEnter: this.onMouseEnter.bind(this, '/feed'),
        onMouseLeave: this.onMouseLeave.bind(this, '/feed'),
      },
      {
        to: '/projects',
        title: 'projects',
        onMouseEnter: this.onMouseEnter.bind(this, '/projects'),
        onMouseLeave: this.onMouseLeave.bind(this, '/projects'),
      },
      {
        to: '/photography',
        title: 'photography',
        onMouseEnter: this.onMouseEnter.bind(this, '/photography'),
        onMouseLeave: this.onMouseLeave.bind(this, '/photography'),
      }
    ];
  }

  onMouseLeave = (key) => {
    const { obfuscate } = this.state;
    obfuscate[key] = true;
    this.setState({ obfuscate });
  }

  onMouseEnter = (key) => {
    const { obfuscate } = this.state;
    obfuscate[key] = false;
    this.setState({ obfuscate });
  }

  isActive = (path) => this.props.location.pathname === path;

  render() {
    const { obfuscate } = this.state;
    const baffleSettings = {
      characters: '+#-•=~*',
      speed: 50,
      update: true,
      revealDuration: 2000,
      revealDelay: 0,
    };

    return (
      <div className='nav'>
        <ul className="">
        {
          this.getNavItems().map((item) => {
            return (
              <li key={item.to}>
                <NavLink {...item} exact activeClassName="active">
                  {
                    this.isActive(item.to) ? <span>{item.title}</span> :
                    <Baffle {...baffleSettings} obfuscate={obfuscate[item.to]}>
                      {item.title}
                    </Baffle>
                  }
                </NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}
export default Nav;
