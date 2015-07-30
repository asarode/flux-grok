'use strict'

import React from 'react'
import cx from 'classname'
import Navbar from './navbar'
import ApplicantCard from './applicant-card'
import ApplicantStore from '../stores/applicant-store'
import ApplicantActions from '../actions/applicant-actions'
import connectToStores from 'alt/utils/connectToStores'
import alt from '../alt'

class ApplicantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static getStores() {
    return [ApplicantStore]
  }

  static getPropsFromStores() {
    return ApplicantStore.getState()
  }

  componentDidMount() {
    ApplicantActions.fetch()
  }

  render() {
    return (
      <div>
        <Navbar
          onSwitch={this.onSwitch.bind(this)}/>
        {this.applicants}
      </div>
    )
  }

  onSwitch(switchAction) {

  }

  get applicants() {
    let { applicants } = this.props

    let cards = applicants.map((item, i) => {
      return (
        <ApplicantCard
          key={i}
          firstName={item.firstName}
          lastName={item.lastName}
          bio={item.bio}
          status={item.status}
          createdAt={item.createdAt}/>
      )
    })

    return cards
  }
}

ApplicantList.PropTypes = {}

ApplicantList.defaultProps = {}

ApplicantList.contextTypes = {}

export default connectToStores(ApplicantList)