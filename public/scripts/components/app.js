'use strict'

import React from 'react'
import cx from 'classname'
import Header from './header'
import ApplicantList from './applicant-list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header/>
        <ApplicantList/>
      </div>
    )
  }
}

App.PropTypes = {}

App.defaultProps = {}

export default App
