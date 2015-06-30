'use strict'

var React = require("react");

var App = React.createClass({
    render() {
        return <h2>Browsersync is really cool</h2>
    }
});

React.render(<App/>, document.getElementById('example'));

