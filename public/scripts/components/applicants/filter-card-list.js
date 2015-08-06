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
    return this.props.applicants.map((item, i) => {
      return (
        <ApplicantCard
          key={i}
          item={item}/>
      )
    })
  }
}

FilterCardList.PropTypes = {
  applicants: React.PropTypes.array
}

FilterCardList.defaultProps = {
  applicants: []
}

export default FilterCardList