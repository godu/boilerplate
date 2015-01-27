'use strict';

var React = require('react');

var Topics = require('./topics.jsx');
var Messages = require('./messages.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Messages context={this.props.context}/>
            </div>
        );
    }
});
