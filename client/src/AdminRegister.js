import React, { Component } from 'react';
import axios from 'axios';

class AdminRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newSession = this.props.generateRandom(6);
    console.log("submission")
    const { firstName, lastName, emailAddress, password } = this.state;
    axios.post("./api/admin/register", {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      emailAddress: emailAddress.toLowerCase().trim(),
      password: password,
    })
    .then((res) => {
      this.props.adminGreet(this.state.firstName)
      sessionStorage.setItem('key', newSession)
      sessionStorage.setItem('name', this.state.firstName)
      this.props.login();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    console.log("this.props: ", this.props)
    const { firstName, lastName, emailAddress, password } = this.state;
    return(
      <div className="admin-form-container-r">
        <h2>Register</h2>
        <form className="admin-form" onSubmit={this.onSubmit}>
          <div className="form-group-a">
            <input
              type="text"
              className="email"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.onChange}/>
          </div>
          <div className="form-group-b">
            <input
              type="text"
              className="email"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
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
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.onChange}/>
          </div>
          <button
            type="submit"
            className="add-button form-group-e"
            >Register</button>
        </form>
      </div>
    )
  }
}

export default AdminRegister;
