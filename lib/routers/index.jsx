'use strict';

var React = require('react');

var HelloWorld = require('../components/hello-world.jsx');

module.exports = function(req, res) {
    res.send('<!DOCTYPE html>' + React.renderToStaticMarkup(
        <HelloWorld name="world"/>
    ));
};