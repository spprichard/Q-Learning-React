import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Q-Learning Agent</h1>
        </header>
        <HelloWorld name="Tess"/>
        <HelloWorld name="Steven"/>
      </div>
    );
  }
}

export default App;
