import React, { Component } from 'react';
import axios from 'axios';

import AdminForm from './AdminForm';
import Waitlist from './Waitlist';


class Admin extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    const { customers } = this.state;
    axios.get('./api/customers')
      .then((response) => {
        this.setState({
          customers: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(this.state.customers)
    }

  render() {
    return(
      <div>
        <div className="admin-layout">
        <span className="logo-text">Waitlist</span>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="mailto:danielredwhite@gmail.com">Contact</a></li>
        </ul>
        <h4 className="waitlist-name">Claytek Pottery Studios</h4>
        <h2 className="title">Add a waiter to the waitlist</h2>
          <AdminForm customers={this.state.customers}/>
          <div className="see-more">
            see the waitlist <br />
            <i className="down-arrow"></i>
            </div>
        </div>
      <Waitlist customers={this.state.customers}/>
      </div>
    )
  }
}

export default Admin;
