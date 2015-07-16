'use strict';

import 'es6-shim';
import 'console-polyfill';
import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Need to use this for material-ui
injectTapEventPlugin();

Router.run(Routes, Router.HistoryLocation, (Root, state) => {
	React.render(
		<Root {...state}/>,
		document.body
	);
});