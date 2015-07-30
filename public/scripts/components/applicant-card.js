'use strict'

import React from 'react'
import cx from 'classname'

class ApplicantCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let {
      className,
      firstName,
      lastName,
      bio,
      status,
      createdAt
    } = this.props

    return (
      <div className={className}>
        <h3>{firstName} {lastName}</h3>
        <p>{bio}</p>
        <span>{status}</span>
        <span>{createdAt}</span>
      </div>
    )
  }

  get className() {
    return cx('fg-applicant-card', this.props.className)
  }
}

ApplicantCard.PropTypes = {
  className: React.PropTypes.string,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.stirng,
  bio: React.PropTypes.string,
  status: React.PropTypes.string,
  createdAt: React.PropTypes.string
}

ApplicantCard.defaultProps = {}

ApplicantCard.contextTypes = {}

export default ApplicantCard