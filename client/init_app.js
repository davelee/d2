import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  render(
    <App />,
    document.getElementById('react-render')
  );
});
