'use strict'

import axios from 'axios'
import alt from '../alt'

let base = 'http://localhost:5000/api'

class ApplicantActions {
  /**
   *
   * fetch
   * Send a GET request and retreieve all the applicant data
   */
  fetch() {
    let url = `${base}/applicants`
    axios
      .get(url)
      .then((res) => {
        this.actions.fetchSuccess(res)
      })
  }

  /**
   *
   * fetchSuccess
   * Handle succesffully retreiving the applicant data
   */
  fetchSuccess(res) {
    this.dispatch(res)
  }

  /**
   * 
   * create
   * Send a POST request to save a new applicant
   */
  create(item) {
    let url = `${base}/applicants`
    axios
      .post(url, item)
      .then((res) => {
        this.actions.fetch()
      })
  }

  /**
   *
   * move
   * Send a PUT request to change an applicant's status
   */
  move(item) {
    let status = item.status === 'reviewing' ? 'accepted' : 'reviewing'
    let update = {
      status
    }
    let url = `${base}/applicants/${item._id}`
    axios
      .put(url, update)
      .then((res) => {
        this.actions.fetch()
      })
  }

  /**
   *
   * delete
   * Send a DELETE request to delete an applicant
   */
  delete(item) {
    let url = `${base}/applicants/${item._id}`
    axios
      .delete(url)
      .then((res) => {
        this.actions.fetch()
      })
  }
}

export default alt.createActions(ApplicantActions)
