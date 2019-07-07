import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Photography from './photography';
import Feed from './feed';
import Nav from './nav';
import 'normalize.css';
import './app.scss';

class App extends Component {
  render() {
    const content = (
      <Switch key="routes">
        <Route path="/photography" component={Photography} />
        <Route path="/about" component={About} />
        <Route path="/feed" component={Feed} />
        <Route path="/projects" component={Projects} />
        <Route path="/" component={()=>''} />
      </Switch>
    );

    return (
      <div className="app">
        <Nav />
        <div id="content">
          <Landing />
          {content}
        </div>
      </div>
    );
  }
}

class RoutedApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

export default RoutedApp;
