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
    let {
      className,
      item
    } = this.props

    return (
      <div className={this.className}>
        <div className="fg-applicant-card-head">
          <h3>{item.name}</h3>
          <span>{item.status}</span>
          <button onClick={this.moveApplicant.bind(this)}>{this.moveText}</button>
          <button onClick={this.deleteApplicant.bind(this)}>delete</button>
        </div>
        <p>{item.bio}</p>
        <span>{moment(item.createdAt).fromNow()}</span>
      </div>
    )
  }

  deleteApplicant() {
    ApplicantActions.delete(this.props.item)
  }

  moveApplicant() {
    ApplicantActions.move(this.props.item)
  }

  get moveText() {
    return this.props.item.status === 'reviewing' ? 'move to accepted' : 'move to reviewing'
  }

  get className() {
    return cx('fg-applicant-card', this.props.className)
  }
}

ApplicantCard.PropTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.object
}

ApplicantCard.defaultProps = {}

ApplicantCard.contextTypes = {}

export default ApplicantCard