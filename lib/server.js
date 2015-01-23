'use strict';

var express = require('express');
var browserify = require('browserify-middleware');
var serveStatic = require('serve-static')

var app = module.exports = express();

app.get('/bundle.js', browserify('./lib/client.js'));

app.all('*', serveStatic('./lib/www', {
}));