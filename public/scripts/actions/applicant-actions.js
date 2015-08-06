'use strict'

import axios from 'axios'
import alt from '../alt'
import qs from 'qs'

let base = 'http://localhost:5000'

class ApplicantActions {

  fetch(params) {
    let url = `${base}/applicants`
    axios
      .get(url)
      .then((res) => {
        this.actions.fetchSuccess(res)
      })
  }

  fetchSuccess(res) {
    this.dispatch(res)
  }

  create(item) {
    console.log('asda')
    let url = `${base}/applicants`
    axios
      .post(url, item)
      .then((res) => {
        this.actions.fetch()
      })
  }

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
