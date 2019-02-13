import React, { Component } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      statusCode: 0,
      alert: '',
    };
  }

  emailcheck(userEmail) {
    let { customers } = this.props;
    for (let cust in customers) {
      if (userEmail == customers[cust].emailAddress) {
        this.setState({
          alert: 'Email already taken'
        });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.emailcheck(this.state.emailAddress)
  }

  onSubmit = (e) => {
    console.log("got to submit")
    const { firstName, lastName, emailAddress, phoneNumber, statusCode } = this.state;
    if (firstName && lastName && emailAddress && phoneNumber) {
      axios.post("./api/admin", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        emailAddress: emailAddress.toLowerCase().trim(),
        phoneNumber: phoneNumber.trim().replace(/\D/g,''),
        statusCode: statusCode,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }


  render() {
    const { firstName, lastName, emailAddress, phoneNumber, alert } = this.state;
    return(
      <div className="admin-form-container-r">
      <h2 className="list-head">Add to the waitlist</h2>
        <form onSubmit={this.onSubmit} className="admin-form">
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
            <NumberFormat
              format={"###-###-####"}
              mask="_"
              className="email"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={this.onChange}/>
          </div>
          <span className="email-alert">{alert}</span>
          <button type="submit" className="add-button form-group-e">Add</button>
        </form>
      </div>
    )
  }
}

export default AdminForm;
