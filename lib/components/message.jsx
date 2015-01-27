'use strict';

var React = require('react');

var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({
    propTypes: {
        message: ReactPropTypes.object
    },

    render: function() {
        var message = this.props.message;
        return (
            <li>
                <h5>{message.authorName}</h5>
                <div>{message.text}</div>
            </li>
        );
    }
})
