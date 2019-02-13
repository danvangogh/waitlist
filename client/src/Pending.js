import React, { Component } from 'react';
import axios from 'axios';

class Pending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      id: 0,
      status: 1,
      newStatus: 0
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    axios.get("./api/admin/pending")
    .then((response) => {
      const res = response.data[0];
      this.setState({
        name: res.firstName + ' ' + res.lastName,
        email: res.emailAddress,
        phone: res.phoneNumber,
        id: res.id,
        status: res.statusCode,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChange = (e) => {
    this.setState({
      newStatus: e.target.value
    })
  }

  onClick() {
    axios.patch("./api/admin/update", {
      id: this.state.id,
      newStatus: this.state.newStatus,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.reload();
  }


  render() {
    const { name, email, phone, status } = this.state;
    console.log("state: ", this.state);
    return(
      <div className="pending-container">
        <span className="pending-name">{name}</span>
        <span className="pending-email">{email}</span>
        <span className="pending-phone">{phone}</span>
          <select defaultValue={status} onChange={this.onChange} className="pending-select">
            <option value="1">Not yet contacted</option>
            <option value="2">Contacted</option>
            <option value="3">Confirmed: Yes</option>
            <option value="4">Confirmed: No</option>
          </select>
        <button type="submit" onClick={this.onClick} className="pending-button">Update</button>
      </div>
    )
  }
}

export default Pending;
