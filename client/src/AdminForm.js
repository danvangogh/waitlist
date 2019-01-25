
import React, { Component } from 'react';
import axios from 'axios';

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      statusCode: 0,

    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.post("./api/admin", {
      firstName: this.state.firstName.trim(),
      lastName: this.state.lastName.trim(),
      emailAddress: this.state.emailAddress.toLowerCase().trim(),
      statusCode: this.state.statusCode,
    })
    .then(function (response) {
      console.log(response.data);

    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const { firstName, lastName, emailAddress, phoneNumber, statusCode } = this.state;
    return(
      <div className="admin-form">
        <form onSubmit={this.onSubmit}>
          <div className="form-group-a">
            <input
              type="text"
              className="email"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.onChange}/>
          </div>
          <div className="form-group-b">
            <input
              type="text"
              className="email"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.onChange}/>
          </div>
          <div className="form-group-c">
            <input
              type="text"
              className="email"
              name="emailAddress"
              placeholder="Email"
              value={emailAddress}
              onChange={this.onChange}/>
          </div>
          <div className="form-group-d">
            <input
              type="text"
              className="email"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={this.onChange}/>
          </div>
          <button type="submit" className="add-button form-group-f">Add</button>
        </form>
      </div>
    )
  }
}

export default AdminForm;
