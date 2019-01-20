import './App.css';
import React, { Component } from 'react';
import Results from './Results.js'

class FinderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {

    const { firstName, lastName, emailAddress } = this.state;

    return(
      <div className="client-form">
        <form>
          <input
            name="firstName"
            value={firstName}
            type="text"
            placeholder="First name..."
            onChange={this.onChange}></input>
          <br />
          <input
            name="lastName"
            value={lastName}
            placeholder="Last name..."
            onChange={this.onChange}></input>
          <br />
          <input
            name="emailAddress"
            value={emailAddress}
            type="email"
            placeholder="Email address..."
            onChange={this.onChange}></input>
          <br />
          <button
            type="submit"
            onClick={this.onClick}
            value="Click it"></button>
        </form>
        <Results client={this.state} />
      </div>
    )
  }
}

export default FinderForm;
