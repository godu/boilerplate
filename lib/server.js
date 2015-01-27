'use strict';

require('node-jsx').install({extension: '.jsx'});

var React = require('react');
var serialize = require('serialize-javascript');

var express = require('express');
var browserify = require('browserify-middleware');
var serveStatic = require('serve-static')

var app = module.exports = express();

app.get('/bundle.js', browserify('./lib/client.js', {
    cache: 'dynamic',
    precompile: true,
    transform: [
        ['reactify', {
            es6: true
        }]
    ]
}));

var HTMLComponent = React.createFactory(require('./components/html.jsx'));

app.all('*', function(req, res) {
    var html = React.renderToStaticMarkup(HTMLComponent());

    res.send('<!DOCTYPE html>' + html);
});
