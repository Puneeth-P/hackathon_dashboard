import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Puneeth, Ready for Hackathon???</h2>
        </div>
        <p className="App-intro">
          To get started, come up with a design
        </p>
      </div>
    );
  }
}

export default App;
