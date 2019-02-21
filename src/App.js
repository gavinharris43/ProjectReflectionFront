import React, { Component } from 'react';
import TrainerArea from './Dashboard/TrainerArea.js';
import Login from './Account/Login.js';
import Register from './Account/Register.js';
import {REFLECTIONURL} from './Constants.js'
import FeedbackForm from './Feedback/FeedbackForm.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={Login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/dashboard"} component={TrainerArea} />
          <Route path={"/feedbackform"} component={FeedbackForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
