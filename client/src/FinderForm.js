import React, { Component } from 'react';
import Results from './Results.js'
import axios from 'axios'

class FinderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      emailAddress: "",
      showQ: false,
      index: 0,
      pending: [],
      name: "",
    };
  }

  componentDidMount() {
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
    if ((this.state.emailAddress).length <= 1) {
      this.setState({ showQ: false });
    }
  }

  onClick = (e) => {
    e.preventDefault();
    if ((this.state.emailAddress).length > 0) {
      this.sorter(this.state.customers);
      this.setState({ emailAddress: '' });
    }
  }

  sorter = (arr) => {
    console.log("arr: ", arr)
    const pendingEntries = [];
    const confirmedEntries = [];
    const address = this.state.emailAddress

    let userIndex = 0;
    let tru = 0;
    let currentIndex = 0;
    let fName = "";

    arr.forEach(function(customer, index) {
      if (customer.statusCode !== 0) {
        confirmedEntries.push(customer)
      } else {
        pendingEntries.push(customer)
      }
      if (customer.emailAddress === address) {
        fName = customer.firstName;
        userIndex = index + 1;
      }
      tru = confirmedEntries.length;
      currentIndex = userIndex - tru
    })
    this.setState({
      index: currentIndex,
      showQ: true,
      pending: pendingEntries,
      name: fName,
    });
  }

  render() {

    const { emailAddress } = this.state;

    return(
      <div className="client-form">
      <span className="logo-text">Waitlist</span>
      <ul className="nav">
        <li>Home</li>
        <li>Admin</li>
        <li>Contact</li>
      </ul>
      <h4 className="waitlist-name">Claytek Pottery Studios</h4>
        <h2 className="title">Enter your email to see your position in the queue</h2>
          <form className="check-form">
            <div className="email-input">
              <input
                className="email"
                name="emailAddress"
                value={emailAddress}
                type="email"
                placeholder="Email..."
                onChange={this.onChange}></input>
              <br />
              <button
                className="check-button"
                type="submit"
                onClick={this.onClick}>Go</button>
              </div>
          </form>
          <Results showQ={this.state.showQ} index={this.state.index} pending={this.state.pending.length} name={this.state.name}/>
      </div>
    )
  }
}

export default FinderForm;
