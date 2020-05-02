import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { stack as BurgerNav } from 'react-burger-menu'
import MediaQuery from 'react-responsive';
import Baffle from 'baffle-react';
import hamburgerSVG from 'assets/images/menu.svg';
import './nav.scss';

@withRouter
class Nav extends Component {
  state = {
    isOpen: false
  }

  constructor() {
    super();
    const obfuscate = {};
    this.getNavItems().map(item => {
      obfuscate[item.to] = true;
    });
    this.state.obfuscate = obfuscate;
  }

  componentWillMount() {
    // listen for route changes
    this.props.history.listen(this.setMobileNavClosed)
  }

  getNavItems = () => {
    return [
      {
        to: '/',
        title: 'Dave Lee',
      },
      {
        to: '/contact',
        title: 'contact',
      },
      {
        to: '/feed',
        title: 'feed',
      },
      {
        to: '/projects',
        title: 'projects',
      },
      {
        to: '/photography',
        title: 'photography',
      }
    ];
  }

  onMouseLeave = (key) => {
    // const { obfuscate } = this.state;
    // obfuscate[key] = true;
    // this.setState({ obfuscate });
  }

  onMouseEnter = (key) => {
    // const { obfuscate } = this.state;
    // obfuscate[key] = false;
    // this.setState({ obfuscate });
  }

  attachMouseEvents = (item) => {
    item.onMouseEnter = this.onMouseEnter.bind(this, item.to);
    item.onMouseLeave = this.onMouseLeave.bind(this, item.to);
    return item;
  }

  isActive = (path) => this.props.location.pathname === path;

  setMobileNavClosed = (location, action) => this.setState({ isOpen: false })

  onMobileNavStateChange = (state) => this.setState({ isOpen: state.isOpen})

  renderDesktop = () => {
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
          this.getNavItems()
          .map(this.attachMouseEvents)
          .map((item) => {
            return (
              <li key={item.to}>
                <NavLink {...item} exact activeClassName="active">
                  { this.isActive(item.to) ? 
                    <span>{item.title}</span> : 
                    <span>{item.title}</span>
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

  renderMobile = () => {
    let { isOpen } = this.state;
    return (
      <BurgerNav
        outerContainerId="app"
        pageWrapId="content"
        className="burger-nav"
        isOpen={isOpen}
        onStateChange={(state) => this.onMobileNavStateChange(state)}
        customBurgerIcon={<img src={hamburgerSVG} />}
        customCrossIcon={false}
        right
        // noOverlay
      >
        {
          this.getNavItems()
            .map((item) => {
            return (
              <NavLink 
                {...item} 
                className="menu-item" 
                exact 
                key={item.to} 
                activeClassName="active"
              >
                {<span>{item.title}</span>}
              </NavLink>
            )
          })
        }
      </BurgerNav>
    );    
  }

  render() {
    return (
      <MediaQuery query="(min-width: 601px)">
        {
          (matches) => {
            if (matches)
              return this.renderDesktop();
            else
              return this.renderMobile();
          }
        }
      </MediaQuery>
    );
  }

}

export default Nav;
