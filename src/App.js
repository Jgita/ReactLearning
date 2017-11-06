import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var a = 10;
    var color = {
      color: '#ffffff'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={color}>Welcome to React</h1>
        </header>
        <p className="App-intro">
         <p>{a}</p>
        </p>
      </div>
    );
  }
}

export default App;
