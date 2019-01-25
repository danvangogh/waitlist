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

    const listNames = customers.map((customer) =>
      <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
    );
    const listStatus = customers.map((customer) =>
      <li key={customer.id}>{customer.statusCode}</li>
    );
    const listDate = customers.map((customer) =>
      <li key={customer.id}>{ (new Date(customer.created_at)).toLocaleDateString() }</li>
    );

    return(
      <div className="list-container">
        <ul className="waitlist name">{listNames}</ul>
        <ul className="waitlist status">{listStatus}</ul>
        <ul className="waitlist date">{listDate}</ul>
      </div>

    )
  }
}

export default Waitlist;
