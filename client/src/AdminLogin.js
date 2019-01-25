import React, { Component } from 'react';

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, pass } = this.state;
    return(
      <div className="admin-form-container">
        <form onSubmit={this.onSubmit} className="admin-form">
          <div className="form-group-a">
            <input
              type="text"
              className="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.onChange}/>
          </div>
          <div className="form-group-d">
            <input
              type="text"
              className="email"
              name="pass"
              placeholder="Password"
              value={pass}
              onChange={this.onChange}/>
          </div>
          <span className="email-alert">{alert}</span>
          <button type="submit" className="add-button form-group-e">Login</button>
        </form>
      </div>
    )
  }
}

export default AdminLogin;
