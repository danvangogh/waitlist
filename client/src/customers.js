import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }
  componentDidMount() {
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log(customers)));

  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer =>
          <li key={customer.id}>{customer.emailAddress}</li>)}

        </ul>
      </div>
    );
  }
}

export default Customer;
