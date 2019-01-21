import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Admin'
import FinderForm from './FinderForm.js'
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={FinderForm} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
