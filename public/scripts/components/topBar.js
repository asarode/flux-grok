'use strict';

import React from 'react';
import cx from 'classname';

class TopBar extends React.Component {
	constructor(props) {
		super(props);
    this.state = {};
	}

  render() {
    return (
      <div>
        <ul>
          <li>All</li>
          <li>Reviewing</li>
          <li>Accepted</li>
          <li><input type="text" placeholder="Search..."/></li>
          <li><button>+ Enter New Applicant</button></li>
        </ul>
      </div>
    );
  }
}

TopBar.PropTypes = {};

TopBar.defaultProps = {};

TopBar.contextTypes = {};

export default TopBar;