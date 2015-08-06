'use strict'

import React from 'react'
import cx from 'classname'

class ApplicantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
        {/* 1) Add in a FilterCardList component here and pass in mock data */}
      </div>
    )
  }

  get mockApplicants() {
    return [
      {
        name: 'First Last',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Name Bob',
        status: 'accepted',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Chun Li',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Ellie Phant',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Germany Canada',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
    ]
  }
}

ApplicantList.PropTypes = {}

ApplicantList.defaultProps = {}

ApplicantList.contextTypes = {}

export default ApplicantList