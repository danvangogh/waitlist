import React, { Component } from 'react';

class Results extends Component {

  render() {
    const { showQ, index, pending, name } = this.props
    if (showQ && index >= 1) {
      return (
          <div className="results">
            <h4 className="result-text">Hi {name}! <br /> You are #{index} <br /> of {pending} people in line.</h4>
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
        </div>
      )
    }
  }
}

export default Results;
