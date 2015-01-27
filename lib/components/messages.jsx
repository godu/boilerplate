'use strict';

var React = require('react');

var StoreMixin = require('fluxible').StoreMixin;

var Message = require('./message.jsx');
var MessageStore = require('../stores/messages');

module.exports = React.createClass({
    mixins: [StoreMixin],
    statics: {
        storeListeners: {
            _onChange: [MessageStore]
        }
    },

    getInitialState: function() {
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return {
            messages: this.getStore(MessageStore).getAll()
        };
    },

    _onChange: function() {
        this.setState(this.getStateFromStores());
    },

    render: function() {
        var messageList = this.state.messages.map(function(message) {
            return <Message message={message}/>;
        });

        return (
            <div>
                <h1>Messages</h1>
                {messageList}
            </div>
        );
    }
})
