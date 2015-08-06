'use strict';

import 'es6-shim';
import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import bluebird from 'bluebird';
global.Promise = bluebird;

Router.run(Routes, (Root) => {
	React.render(<Root/>, document.getElementById('root'));
});