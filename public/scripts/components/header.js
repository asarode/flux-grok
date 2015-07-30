'use strict'

import React from 'react'
import cx from 'classname'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="fg-bar-main">
        <h1 className="fg-bar-title">Shmounder House</h1>
      </div>
    )
  }
}

Header.PropTypes = {}

Header.defaultProps = {}

Header.contextTypes = {}

export default Header
