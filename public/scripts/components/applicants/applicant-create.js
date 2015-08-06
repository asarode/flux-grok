'use strict'

import React from 'react'
import cx from 'classname'
import { Navigation  } from 'react-router'
import ApplicantActions from '../../actions/applicant-actions'

class ApplicantCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      applicant: {
        name: '',
        bio: ''
      }
    }
  }
  render() {
    return (
      <div>
        <div className="fg-navbar-wrapper">
          <ul className="fg-navbar">
            <li
              ref="create"
              className="fg-navbar-item">
              <button
                type="button"
                onClick={this.transitionToList.bind(this)}>
                ← Applicant List
              </button>
            </li>
          </ul>
        </div>
        <form>
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              onChange={this.onInput.bind(this, 'name')} />
          </div>
          <div className="form-field">
            <label>Bio</label>
            <textarea
              type="text"
              onChange={this.onInput.bind(this, 'bio')} ></textarea>
          </div>
          <div className="form-field">
            <button 
              type="button"
              onClick={this.onSubmit.bind(this)}>
              + Create
            </button>
          </div>
        </form>
      </div>
    )
  }

  onInput(field, e) {
    let { applicant } = this.state
    Object.assign(applicant, { [field]: e.target.value })
    this.setState({
      applicant: applicant
    })
  }

  onSubmit(e) {
    console.log(e)
    let { applicant } = this.state
    if (applicant.name.length > 3 && applicant.bio.length > 3) {
      ApplicantActions.create(applicant)
      this.transitionToList()
    }
  }

  transitionToList() {
    this.context.router.transitionTo('/applicants/list')
  }
}

ApplicantCreate.PropTypes = {}

ApplicantCreate.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default ApplicantCreate
