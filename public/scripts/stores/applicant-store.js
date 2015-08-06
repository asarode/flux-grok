'use strict'

import ApplicantActions from '../actions/applicant-actions'
import alt from '../alt'

class ApplicantStore {
  constructor() {
    this.state = {
      applicants: []
    }
    this.bindListeners({
      onFetchSuccess: ApplicantActions.fetchSuccess
    })
  }

  onFetchSuccess(res) {
    this.setState({
      applicants: res.data
    })
  }
}

export default alt.createStore(ApplicantStore, 'ApplicantStore')