'use strict'

import ApplicantActions from '../actions/applicant-actions'
import alt from '../alt'

class ApplicantStore {
  constructor() {
    // What state are we keeping track of in this store?
    this.state = {}
    this.bindListeners({
      // Bind handlers to the action(s) that get dispatched in 
      // applicant-actions.js
    })
  }
}

export default alt.createStore(ApplicantStore, 'ApplicantStore')