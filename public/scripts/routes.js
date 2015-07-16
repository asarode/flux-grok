'use strict';

import React from 'react';
import App from './components/app';
import Buckets from './components/buckets'
import { Route, Redirect, NotFoundRoute } from 'react-router';

export default (
	<Route handler={App}>
		<NotFoundRoute handler={Buckets.landing}
	</Route>
);