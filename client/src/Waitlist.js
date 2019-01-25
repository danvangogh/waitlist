import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

class Waitlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
    }
  }

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

    const { customers } = this.state;
    const customerByDate = customers.reverse();

    const listNames = customerByDate.map((customer) =>
      <li key={customer.id}>{customer.firstName} {customer.lastName.charAt(0)}.</li>
    );
    const listStatus = customerByDate.map((customer) =>
      <li key={customer.id}>{customer.statusCode}</li>
    );
    const listDate = customerByDate.map((customer) =>
      <li key={customer.id}>{ (new Date(customer.created_at)).toLocaleDateString() }</li>
    );

    return(
      <div className="list-container">
          <span className="list-header">Name</span>
          <span className="list-header">Status</span>
          <span className="list-header">Waiting Since</span>
        <ul className="waitlist">{listNames}</ul>
        <ul className="waitlist">{listStatus}</ul>
        <ul className="waitlist">{listDate}</ul>
      </div>
    )
  }
}

export default Waitlist;
