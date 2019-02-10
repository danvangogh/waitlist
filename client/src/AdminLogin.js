import React, { Component } from 'react';
import axios from 'axios';

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newSession = this.props.generateRandom(6);
    const { emailAddress, password } = this.state;
    if ( emailAddress && password ) {
      axios.post('/api/admin/login', {
        emailAddress: emailAddress,
        password: password
      }).then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('key', newSession)
          this.props.login();
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  render() {
    const { emailAddress, password } = this.state;
    return(
      <div className="admin-form-container">
        <form className="admin-form" onSubmit={this.handleSubmit}>
          <div className="form-group-a">
            <input
              type="text"
              className="email"
              name="emailAddress"
              placeholder="Username"
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
            >Login</button>
        </form>
      </div>
    )
  }
}

export default AdminLogin;
