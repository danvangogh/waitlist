import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
  };
  render() {
    return(
      <h2>this is admin</h2>
      
    )
  }
}

export default Admin;
