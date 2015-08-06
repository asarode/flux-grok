'use strict'

import React from 'react'
import cx from 'classname'

// Import the stores, actions, and utils we need for flux

import FilterCardList from './filter-card-list'

class ApplicantList extends React.Component {
  constructor(props) {
    super(props)
    // What states are we going to need to know for filtering the applicants?
    this.state = {}
  }

  // Get connected to the store(s) you need
  static getStore() {
    
  }

  // Get state from store(s)
  // The state will become attached to this component's props
  static getPropsFromStores() {
    
  }

  // Fetch data when component mounts
  componentDidMount() {

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
              <button>Refresh</button>
            </li>
            <li className="fg-navbar-item fg-navbar-link">
              All
            </li>
            <li className="fg-navbar-item fg-navbar-link">
              Reviewing
            </li>
            <li className="fg-navbar-item fg-navbar-link">
              Accepted
            </li>
            <li
              className="fg-navbar-item">
              <input 
                type="text"
                placeholder="Enter name..." />
            </li>
            <li className="fg-navbar-item">
              <button>+ Enter New Applicant</button>
            </li>
          </ul>
        </div>

        {/* We need to pass in other props so this component can filter through
           the applicants and give us what we want */}
        <FilterCardList
          applicants={this.props.applicants}/>
      </div>
    )
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
export default ApplicantList