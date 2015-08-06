'use strict'

import React from 'react'
import cx from 'classname'
import ApplicantCard from './applicant-card'


class FilterCardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.cards}
      </div>
    )
  }

  get cards() {
    let { applicants, search, status } = this.props
    let nameFilter = (item) => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    }
    let statusFilter = (item) => {
      return status === 'all' || item.status === status
    }
    let cardMap = (item, i) => {
      return this.card(item, i)
    }
    return applicants
            .filter(nameFilter)
            .filter(statusFilter)
            .map(cardMap)
  }

  card(item, key) {
    return (
      <ApplicantCard
        key={key}
        item={item}/>
    )
  }
}

FilterCardList.PropTypes = {
  applicants: React.PropTypes.array,
  status: React.PropTypes.object,
  search: React.PropTypes.string
}

FilterCardList.defaultProps = {
  applicants: []
}

export default FilterCardList
