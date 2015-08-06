'use strict'

import React from 'react'
import cx from 'classname'
import moment from 'moment'
import ApplicantActions from '../../actions/applicant-actions'

class ApplicantCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { item } = this.props

    return (
      <div className="fg-applicant-card">
        <div className="fg-applicant-card-head">
          <h3>{item.name}</h3>
          <span>{item.status}</span>
        </div>
        <p>{item.bio}</p>
        <span>{moment(item.createdAt).fromNow()}</span>
      </div>
    )
  }
}

ApplicantCard.PropTypes = {
  item: React.PropTypes.object
}

ApplicantCard.defaultProps = {}

ApplicantCard.contextTypes = {}

export default ApplicantCard