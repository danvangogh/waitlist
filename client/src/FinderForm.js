import './App.css';
import React, { Component } from 'react';

class FinderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // firstName: "",
      // lastName: "",
      emailAddress: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = (e) => {
    e.preventDefault();
    return;
  }

  render() {

    const { firstName, lastName, emailAddress } = this.state;

    return(
      <form>
        <input
          name="firstName"
          value={firstName}
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
          placeholder="Email address..."
          onChange={this.onChange}></input>
        <br />
        <button
          type="submit"
          onClick={this.onClick}
          value="Click it"></button>
      </form>
    )
  }
}

export default FinderForm;
