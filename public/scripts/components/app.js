'use strict'

import React from 'react'

import Header from './header'
import { ApplicantList } from './applicants'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header/>
        <ApplicantList
          applicants={this.mockApplicants}/>
      </div>
    )
  }
  
  get mockApplicants() {
    return [
      {
        name: 'First Last',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Name Bob',
        status: 'accepted',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Chun Li',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Ellie Phant',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
      {
        name: 'Germany Canada',
        status: 'reviewing',
        bio: 'What a cool kid.',
        createdAt: '2015-08-06T10:21:17.701Z'
      },
    ]
  }
}

App.PropTypes = {}

App.defaultProps = {}

export default App
