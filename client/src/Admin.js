import React, { Component } from 'react';

import AdminForm from './AdminForm';

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
  };
  render() {
    return(
      <div>
        <h2>this is admin</h2>
        <AdminForm />
      </div>

    )
  }
}

export default Admin;
