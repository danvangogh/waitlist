import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import FinderForm from './FinderForm.js';
import './css/styles.css';
import './css/layout.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/*' component={FinderForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
