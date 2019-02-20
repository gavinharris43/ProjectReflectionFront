import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div>
              <Link to="/login"><div>Login</div></Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/register">Register</Link>
            </div>
          )} />
          <Route exact={true} path='/login' render={() => (
            <Login />
          )} />
          <Route exact={true} path='/dashboard' render={() => (
            <Dashboard />
          )} />
          <Route exact={true} path='/register' render={() => (
          <Register />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
