import React, { Component } from 'react';

import AdminForm from './AdminForm';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
  };
  render() {
    return(
      <div className="admin-layout">
      <span className="logo-text">Waitlist</span>
      <ul className="nav">
        <li>Home</li>
        <li>Admin</li>
        <li>Contact</li>
      </ul>
      <h4 className="waitlist-name">Claytek Pottery Studios</h4>
      <h2 className="title">Add a waiter to the waitlist</h2>
        <AdminForm />
        <span className="see-more">see the waitlist</span>
      </div>

    )
  }
}

export default Admin;
