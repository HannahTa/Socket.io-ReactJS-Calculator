import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import './App.css';

import Input from './components/Input/InputComponent';
import Display from './components/Display/DisplayComponent';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const socket = openSocket('enter-url-here');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path="/" render={props => <Display socket={socket} {...props} />} />
            <Route path="/Input" render={props => <Input socket={socket} {...props} />} />
          </Switch>

        </div>
      </Router>
    );
  }
}


export default App;
