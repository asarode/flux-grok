'use strict';

import React from 'react';
import cx from 'classname';
import Header from './header';
import TopBar from './topBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header/>
        <TopBar/>
      </div>
    );
  }
}

App.PropTypes = {};

App.defaultProps = {};

export default App;
