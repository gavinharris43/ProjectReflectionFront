import React, { Component } from 'react';
import TrainerArea from './Dashboard/TrainerArea.js';
import Login from './Account/Login.js';
import Register from './Account/Register.js';
//import {REFLECTIONURL} from './Constants.js'
import FeedbackForm from './Feedback/FeedbackForm.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "App">
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/logout"} component={Logout} />
          <Route path={"/register"} component={Register} />
          <Route path={"/dashboard"} component={TrainerArea} />
          <Route path={"/feedbackform"} component={FeedbackForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
