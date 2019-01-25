import React, { Component } from 'react';

import AdminForm from './AdminForm';
import Waitlist from './Waitlist';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
  };
  render() {
    return(
      <div>
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
          <div className="see-more">
            see the waitlist <br />
            <i className="down-arrow"></i>
            </div>
        </div>
      <Waitlist />
      </div>
    )
  }
}

export default Admin;
