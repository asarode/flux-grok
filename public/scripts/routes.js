'use strict'

import React from 'react'
import App from './components/app'
import Applicants from './components/applicants'
import { Route, Redirect, NotFoundRoute } from 'react-router'

export default (
	<Route name='app' path='/' handler={App} >
    <Redirect
      from="/"
      to="/applicants/list" />
		<Route
			name='applicants.list'
			path='/applicants/list'
			handler={Applicants.list} />

    <Route
      name='applicants.create'
      path='/applicants/create'
      handler={Applicants.create} />
  </Route>

	// </Route>


)