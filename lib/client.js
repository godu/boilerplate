'use strict'

var React = require('react');
var Hello = require('./components/hello-world.jsx');

var ready = function() {
	React.render(<Hello name="bob"/>, document.body);
};

document.addEventListener("DOMContentLoaded", setTimeout.bind(null, ready, 1000));