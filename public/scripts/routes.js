'use strict';

import React from 'react';
import App from './components/app';
import { Route, Redirect, NotFoundRoute } from 'react-router';

export default (
	<Route name='app' path='/' handler={App} />

		// {/* Buckets Home */}
		// <Route
		// 	name='buckets.list'
		// 	path='/buckets/list'
		// 	handler={Buckets.list} />

	// </Route>


);