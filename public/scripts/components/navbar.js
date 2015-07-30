'use strict'

import React from 'react'
import cx from 'classname'

class Navbar extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
      active: 'all'
    }
	}

  render() {
    let { active } = this.state

    return (
      <div className="fg-navbar-wrapper">
        <ul className="fg-navbar">
          <li
            ref="all"
            onClick={this.onSwitch.bind(this, 'all')}
            className={cx('fg-navbar-item', 'fg-navbar-link', {
              'fg-navbar-link--active': active === 'all'
            })}>
            All
          </li>
          <li
            ref="reviewing"
            onClick={this.onSwitch.bind(this, 'reviewing')}
            className={cx('fg-navbar-item', 'fg-navbar-link', {
              'fg-navbar-link--active': active === 'reviewing'
            })}>
            Reviewing
          </li>
          <li
            ref="accepted"
            onClick={this.onSwitch.bind(this, 'accepted')}
            className={cx('fg-navbar-item', 'fg-navbar-link', {
              'fg-navbar-link--active': active === 'accepted'
            })}>
            Accepted
          </li>
          <li
            ref="search"
            onClick={this.onSearch.bind(this)}
            className="fg-navbar-item">
            <input type="text" placeholder="Search..."/>
          </li>
          <li
            ref="create"
            className="fg-navbar-item">
            <button>+ Enter New Applicant</button>
          </li>
        </ul>
      </div>
    )
  }

  onSwitch(target) {
    this.setState({
      active: target
    })
  }

  onSearch() {
    return
  }
}

Navbar.PropTypes = {
  onSwitch: React.PropTypes.func
}

Navbar.defaultProps = {}

Navbar.contextTypes = {}

export default Navbar