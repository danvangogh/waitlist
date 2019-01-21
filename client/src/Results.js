import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { showQ, index, pending } = this.props
    console.log("props: ", this.props)
    if (showQ) {
      return (
          <div className="results">
            <h1>You are in position # {index} of:{pending}</h1>
          </div>
      );
    }
    return(
      <h4>waiting...</h4>
    )

  }
}

export default Results;
