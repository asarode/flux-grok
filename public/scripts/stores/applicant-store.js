'use strict'

import ApplicantActions from '../actions/applicant-actions'
import alt from '../alt'

class ApplicantStore {
  constructor() {
    this.state = {}
    this.bindListeners({
      
    })
  }
}

export default alt.createStore(ApplicantStore, 'ApplicantStore')