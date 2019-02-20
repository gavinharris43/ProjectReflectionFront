import React, { Component } from 'react';
import TrainerArea from './Dashboard/TrainerArea.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => (
            <div>
              <Link to="/login"><div>Login</div></Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/register">Register</Link>
            </div>
          )} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/dashboard' component={TrainerArea} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
