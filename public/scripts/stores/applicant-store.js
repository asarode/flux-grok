'use strict'

import ApplicantActions from '../actions/applicant-actions'
import alt from '../alt'

class ApplicantStore {
  constructor() {
    this.state = {
      applicants: []
    }
    this.bindListeners({
      onFetch: ApplicantActions.fetch
    })
  }

  onFetch(data) {
    this.setState({
      applicants: data
    })
  }
}

export default alt.createStore(ApplicantStore, 'ApplicantStore')