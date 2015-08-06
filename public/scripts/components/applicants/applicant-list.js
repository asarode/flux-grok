'use strict'

import React from 'react'
import cx from 'classname'
import FilterCardList from './filter-card-list'
import ApplicantStore from '../../stores/applicant-store'
import ApplicantActions from '../../actions/applicant-actions'
import connectToStores from 'alt/utils/connectToStores'
import alt from 'alt'
import { Navigation  } from 'react-router';

class ApplicantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      status: 'all'
    }
  }

  static getStores() {
    return [ApplicantStore]
  }

  static getPropsFromStores() {
    return ApplicantStore.getState()
  }

  componentDidMount() {
    this.fetch()
  }

  render() {
    console.log(this.state.status)
    let { status, search } = this.state
    let { applicants } = this.props
    return (
      <div>
        <div className="fg-navbar-wrapper">
          <ul className="fg-navbar">
            <li
              ref="all"
              onClick={this.onSwitch.bind(this, 'all')}
              className={cx('fg-navbar-item', 'fg-navbar-link', {
                'fg-navbar-link--active': status === 'all'
              })}>
              All
            </li>
            <li
              ref="reviewing"
              onClick={this.onSwitch.bind(this, 'reviewing')}
              className={cx('fg-navbar-item', 'fg-navbar-link', {
                'fg-navbar-link--active': status === 'reviewing'
              })}>
              Reviewing
            </li>
            <li
              ref="accepted"
              onClick={this.onSwitch.bind(this, 'accepted')}
              className={cx('fg-navbar-item', 'fg-navbar-link', {
                'fg-navbar-link--active': status === 'accepted'
              })}>
              Accepted
            </li>
            <li
              className="fg-navbar-item">
              <input 
                type="text"
                placeholder="Enter name..."
                onChange={this.onSearchInput.bind(this)}/>
            </li>
            <li
              ref="create"
              className="fg-navbar-item">
              <button 
                onClick={this.transitionToCreate.bind(this)}>
                + Enter New Applicant
              </button>
            </li>
          </ul>
        </div>
        <FilterCardList
          search={search}
          applicants={applicants}
          status={status} />
      </div>
    )
  }

  transitionToCreate() {
    this.context.router.transitionTo('/applicants/create')
  }

  fetch() {
    ApplicantActions.fetch()
  }

  onSearchInput(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSwitch(switchAction) {
    this.setState({
      status: switchAction
    })
  }
}

ApplicantList.PropTypes = {}

ApplicantList.defaultProps = {
  applicants: []
}

ApplicantList.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default connectToStores(ApplicantList)