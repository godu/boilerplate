'use strict';

var createStore = require('fluxible/utils/createStore');

module.exports = createStore({
    storeName: 'MessageStore',
    handlers: {
        'RECEIVE_MESSAGES': 'receiveMessages'
    },
    initialize: function (dispatcher) {
        this.messages = [];
    },
    receiveMessages: function (messages) {
        var self = this;
        messages.forEach(function (message) {
            self.messages[message.id] = message;
        });
        self.emitChange();
    },
    get: function(id) {
        return this.messages[id];
    },
    getAll: function() {
        return this.messages;
    },
    dehydrate: function () {
        return {
            messages: this.messages
        };
    },
    rehydrate: function (state) {
        this.messages = state.messages
    }
});
