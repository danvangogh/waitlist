import React, { Component } from 'react';
import Results from './Results.js'
import { BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'

class FinderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      emailAddress: '',
      showQ: false,
      index: 0,
      pending: [],
      name: '',
    };
  }

  componentWillUpdate() {
      // console.log(this.state.customers)
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
      // this.sorter(this.state.customers);
      axios.get(`./api/customers/${this.state.emailAddress}`)
      .then((response) => {
        console.log("return from server: ", response.data);
        this.setState({
          customers: response.data,
          name: response.data.customer.firstName,
          index: response.data.index.userIndex,
          pending: response.data.index.listLength,
          showQ: true,
          emailAddress: '',
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  //
  // sorter = (arr) => {
  //   const pendingEntries = [];
  //   const confirmedEntries = [];
  //   const address = this.state.emailAddress
  //
  //
  //
  //
  //   let userIndex = 0;
  //   let tru = 0;
  //   let currentIndex = 0;
  //   let fName = "";
  //
  //   arr.forEach(function(customer, index) {
  //     if (customer.statusCode >= 3) {
  //       confirmedEntries.push(customer)
  //     } else {
  //       pendingEntries.push(customer)
  //     }
  //     if (customer.emailAddress === address) {
  //       fName = customer.firstName;
  //       userIndex = index + 1;
  //     }
  //     tru = confirmedEntries.length;
  //     currentIndex = userIndex - tru
  //   })
  //
    // this.setState({
    //   index: currentIndex,
    //   showQ: true,
    //   pending: pendingEntries,
    //   name: fName,
    // });
  // }

  // emailSearch = (email) => {
  //   axios.get(`/api/customers/${email}`)
  //   .then((response) => {
  //     console.log("response: ", response)
  //     console.log("response.data: ", response.data)
  //   })
  // }

  render() {

    const { emailAddress } = this.state;

    return(
      <Router>
        <div className="app">
        <span className="logo-text">Waitlist</span>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="mailto:danielredwhite@gmail.com">Contact</a></li>
        </ul>
        <h4 className="waitlist-name">Claytek Pottery Studios</h4>
        <h2 className="title">Enter your email to see your position in the queue</h2>
          <div className="email-input">
            <form className="check-form">
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
                onClick={this.onClick}>Go
              </button>
            </form>
          </div>
          <Results showQ={this.state.showQ} index={this.state.index} pending={this.state.pending} name={this.state.name}/>
        </div>
      </Router>
    )
  }
}

export default FinderForm;
