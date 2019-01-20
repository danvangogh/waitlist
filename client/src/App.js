import React, { Component } from 'react';
import './App.css';
import Customer from './customers.js'
import FinderForm from './FinderForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Customer />
        <FinderForm />
      </div>
    );
  }
}

export default App;
