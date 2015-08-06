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
    // 1) Render the applicant cards by mapping each object in the applicant
    //    array to an ApplicantCard component with the right props
  }
}

FilterCardList.PropTypes = {
  applicants: React.PropTypes.array
}

FilterCardList.defaultProps = {
  applicants: []
}

export default FilterCardList