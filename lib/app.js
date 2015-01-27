'use strict';

var React = require('react');
var Fluxible = require('fluxible');

var ChatApp = require('./components/chat-app.jsx');

var app = module.exports = new Fluxible({
    appComponent: React.createFactory(ChatApp)
});

app.registerStore(require('./stores/messages'));
