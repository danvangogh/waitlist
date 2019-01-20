import React, { Component } from 'react';

import './App.css';

import FinderForm from './FinderForm.js'

class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="heading">
          <h2>Enter your email to see your position in the queue</h2>

          <FinderForm />
        </div>
        </div>
    );
  }
}

export default App;
