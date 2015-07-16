'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<RouteHandler {...this.props} />
			</div>
		);
	}
}

App.childContextTypes = {
	router: React.PropTypes.func
};