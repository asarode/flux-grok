'use strict'

import axios from 'axios'
import alt from '../alt'

let base = 'http://localhost:8000'

class ApplicantActions {
  create(applicant) {
    let url = base + '/applicants'
    axios
      .post(url, applicant)
      .then((res) => {
        this.actions.fetch
      })
  }

  fetch() {
    let url = base + '/applicants'
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        this.dispatch(res.data)
      })
  }
}

export default alt.createActions(ApplicantActions)