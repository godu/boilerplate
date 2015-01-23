'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>  
                    <script type="text/javascript" src="/bundle.js"/>
                </head>
                <body>
                    Hello {this.props.name} !
                </body>
            </html>
        );
    }
});