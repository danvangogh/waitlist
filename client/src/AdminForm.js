
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
    const { firstName, lastName, emailAddress, statusCode } = this.state;
    return(
      <form onSubmit={this.onSubmit} className="App">
        <h4 className="admin add-topic">Add a Waiter</h4>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            className="form-control"
            name="emailAddress"
            value={emailAddress}
            onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Status Code</label>
          <select
            name="statusCode"
            value={statusCode}
            onChange={this.onChange}>
            <option value="0">Waiting</option>
            <option value="1">Called/Left Message</option>
            <option value="2">Sent Email</option>
            <option value="3">Confirmed No</option>
            <option value="4">Confirmed Yes</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AdminForm;
