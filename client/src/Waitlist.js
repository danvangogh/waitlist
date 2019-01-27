import React, { Component } from 'react';

class Waitlist extends Component {

  codeSwitch = (code) => {
    switch (code) {
      case 0: return "Waiting";
      case 1: return "Contacted";
      case 2: return "Confirmed: Yes";
      case 3: return "Confirmed: No";
      default: return "Waiting";
    }
  }

  render() {

    const { customers } = this.props;
    const customerByDate = customers.reverse();

    const listNames = customerByDate.map((customer) =>
      <li key={customer.id}>{customer.firstName} {customer.lastName.charAt(0)}.</li>
    );
    const listStatus = customerByDate.map((customer) =>
      <li key={customer.id}>{this.codeSwitch(customer.statusCode)}</li>
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
