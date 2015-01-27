'use strict'

var React = require('react');
var app = require('./app');

var ready = function() {
    var context = app.createContext();

    React.render(app.getAppComponent()({
        context: context.getComponentContext()
    }), document.body);
};

document.addEventListener('DOMContentLoaded', ready);
