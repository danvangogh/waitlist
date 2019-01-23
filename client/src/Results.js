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
            <h4 className="result-text">Hi {name}! <br /> You are #{index} <br /> of: {pending} people waiting.</h4>
          </div>
      );
    } else if (showQ && index < 1) {
      return (
        <div className="results">
          <h4 className="result-text">Oops! Gator can't find that email address.</h4>
        </div>
      );
    } else if (!showQ) {
      return(
        <div className="results">
          <h4 className="result-text">waiting...</h4>
        </div>
      )
    }
  }
}

export default Results;
