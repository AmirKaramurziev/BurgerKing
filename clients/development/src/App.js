import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from './views/common/register/register';
import Login from './views/common/login/login';
import AdminPage from './views/admin';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path= "/register" component={RegisterPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={AdminPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
