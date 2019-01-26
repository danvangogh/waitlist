import React, { Component } from 'react';

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      pass: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    const { userName, pass } = this.state;
    if ((userName === "Admin") && (pass === "123")) {
      this.props.login();
    }
  }

  render() {
    const { userName, pass } = this.state;
    return(
      <div className="admin-form-container">
        <form className="admin-form">
          <div className="form-group-a">
            <input
              type="text"
              className="email"
              name="userName"
              placeholder="Username"
              value={userName}
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
          <button
            type="button"
            className="add-button form-group-e"
            onClick={this.onSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default AdminLogin;
