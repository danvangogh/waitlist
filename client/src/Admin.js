import React, { Component } from 'react';
import axios from 'axios';

import AdminForm from './AdminForm';
import Waitlist from './Waitlist';
import AdminLogin from './AdminLogin';
import Pending from './Pending';
import AdminRegister from './AdminRegister';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    customers: [],
    isloggedIn: false,
    adminName: '',
  };

  componentDidMount() {
    axios.get('./api/customers')
      .then((response) => {
        this.login();
        this.setState({
          customers: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(this.state.customers)
    }

    login = (e) => {
      const key = sessionStorage.getItem('key');
      const name = sessionStorage.getItem('name')
      if (key) {
        console.log("got to login!!!!!!!!!!!!");
        console.log("name: ", name);
        this.setState({
          isloggedIn: true,
          adminName: name,
        });
      }
    }

    adminGreet = (user) => {
      console.log("got to adminGreet");
      console.log("name in adminGreet: ", user);
      this.setState({adminName: user})
    }

    generateRandom = (end) => {
      return Math.random().toString(16).substr(2).slice(0, end);
    }

    logOut = () => {
      sessionStorage.clear();
    }


  render() {

    const { isloggedIn, customers, adminName } = this.state;
    console.log("adminName: ", adminName)
    return(

      <div>
        {isloggedIn ? (
          <div>
          <div className="admin-layout">
          <span className="logo-text">Waitlist</span>
          <ul className="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="mailto:danielredwhite@gmail.com">Contact</a></li>
            <li><a href="/" onClick={this.logOut}>Logout</a></li>
          </ul>
          <h4 className="waitlist-name">Claytek Pottery Studios</h4>
          <h2 className="greeting">Hi {adminName}</h2>
          <div className="pending">
          <h2 className="next-in-line">Next in line...</h2>
          <Pending className="pending"/>

          </div>
            <AdminForm customers={customers}/>
            <div className="see-more">
              see the waitlist <br />
              <i className="down-arrow"></i>
            </div>
          </div>
          <Waitlist customers={customers}/>
          </div>
          ) : (
            <div className="admin-layout">
            <span className="logo-text">Waitlist</span>
            <ul className="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/admin">Admin</a></li>
              <li><a href="mailto:danielredwhite@gmail.com">Contact</a></li>
            </ul>
            <h4 className="waitlist-name">Claytek Pottery Studios</h4>
            <AdminLogin login={this.login.bind(this)} generateRandom={this.generateRandom.bind(this)} adminGreet={this.adminGreet.bind(this)}/>
            <AdminRegister login={this.login.bind(this)} generateRandom={this.generateRandom.bind(this)} adminGreet={this.adminGreet.bind(this)}/>
          </div>
        )}
      </div>
    )
  }
}

export default Admin;
