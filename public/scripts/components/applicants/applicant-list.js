'use strict'

import React from 'react'
import cx from 'classname'
import ApplicantStore from '../../stores/applicant-store'
import ApplicantActions from '../../actions/applicant-actions'
import connectToStores from 'alt/utils/connectToStores'
import alt from 'alt'

import FilterCardList from './filter-card-list'

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
    let { applicants } = this.props
    return (
      <div>
        <div className="fg-navbar-wrapper">
          <ul className="fg-navbar">
            <li
              ref="refresh"
              className="fg-navbar-item">
              <button
                onClick={this.fetch.bind(this)}>
                Refresh
              </button>
            </li>
            <li
              onClick={this.onSwitch.bind(this, 'all')}
              className={cx('fg-navbar-item', 'fg-navbar-link', {
                'fg-navbar-link--active': status === 'all'
              })}>
              All
            </li>
            <li
              onClick={this.onSwitch.bind(this, 'reviewing')} 
              className={cx('fg-navbar-item', 'fg-navbar-link', {
                'fg-navbar-link--active': status === 'reviewing'
              })}>
              Reviewing
            </li>
            <li
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
                onChange={this.onSearchInput.bind(this)} />
            </li>
            <li className="fg-navbar-item">
              <button>+ Enter New Applicant</button>
            </li>
          </ul>
        </div>

        {/* We need to pass in other props so this component can filter through
           the applicants and give us what we want */}
        <FilterCardList
          search={this.state.search}
          status={this.state.status}
          applicants={this.props.applicants}/>
      </div>
    )
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

ApplicantList.PropTypes = {
  applicants: React.PropTypes.array
}

ApplicantList.defaultProps = {
  applicants: []
}

ApplicantList.contextTypes = {}

// Add the connectToStores context to the component
export default connectToStores(ApplicantList)