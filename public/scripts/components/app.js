'use strict'

import React from 'react'
import cx from 'classname'
import Header from './header'
import { RouteHandler } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    )
  }
}

App.PropTypes = {}

App.defaultProps = {}

export default App
