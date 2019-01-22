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
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = (e) => {
    e.preventDefault();
    this.sorter(this.state.customers)
  }



  sorter = (arr) => {
    console.log("arr: ", arr)
    const pendingEntries = [];
    const confirmedEntries = [];
    const address = this.state.emailAddress

    let userIndex = 0;
    let tru = 0;
    let currentIndex = 0;

    arr.forEach(function(customer, index) {
      if (customer.statusCode !== 0) {
        confirmedEntries.push(customer)
      } else {
        pendingEntries.push(customer)
      }
      if (customer.emailAddress === address) {
        userIndex = index + 1;
      }
      tru = confirmedEntries.length;
      currentIndex = userIndex - tru
    })
    this.setState({
      index: currentIndex,
      showQ: true,
      pending: pendingEntries,
    });
  }

  render() {

    const { emailAddress } = this.state;

    return(
      <div className="App client-form">
        <h1 className="title">Enter your email to see your position in the queue</h1>
          <form className="check-form">
            <input
              className="email"
              name="emailAddress"
              value={emailAddress}
              type="email"
              placeholder="Email address..."
              onChange={this.onChange}></input>
            <br />
            <button
              className="check-button"
              type="submit"
              onClick={this.onClick}
              value="Click it"></button>
          </form>
          <Results showQ={this.state.showQ} index={this.state.index} pending={this.state.pending.length}/>
      </div>
    )
  }
}

export default FinderForm;
