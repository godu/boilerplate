'use strict';

require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var browserify = require('browserify-middleware');
var serveStatic = require('serve-static')

var route = require('./routers/index.jsx');

var app = module.exports = express();

app.get('/bundle.js', browserify('./lib/client.js', {
    "transform": [
        ["reactify", {"es6": true}]
    ]
}));

app.all('*', route);