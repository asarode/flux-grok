'use strict'

import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {/* 1) Let's write a Header components to display here instead of this*/}
        <h1>Shmounder House</h1>

        {/* 2) Then let's start building out the ApplicantList component */}
      </div>
    )
  }
}

App.PropTypes = {}

App.defaultProps = {}

export default App
