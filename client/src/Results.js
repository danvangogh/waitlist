import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showQ, index, pending, name } = this.props
    if (showQ && index >= 1) {
      return (
          <div className="results">
            <h5>Hi {name}! You are in position # {index} of:{pending}</h5>
          </div>
      );
    } else if (showQ && index < 1) {
      return (
        <h4 className="results">Oops! Gator can't find that email address.</h4>
      );
    } else if (!showQ) {
      return(
        <h4 className="results">waiting...</h4>
      )
    }
  }
}

export default Results;
