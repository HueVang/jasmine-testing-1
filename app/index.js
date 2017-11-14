var React = require('react');
var ReactDOM = require('react-dom');
var {App} = require('./components/App');
var {Calculator} = require('./components/Calculator');
var styles = require('./styles/style.css');

ReactDOM.render(
  <Calculator />,
  document.getElementById('app')
);
