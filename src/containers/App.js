import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './../logo.svg';
import './../App.css';
import HelloWorldList from "./../components/HelloWorldList";
import Home from './../components/Home';
import Nav from './../components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Q-Learning Agent & Stuff</h1>
          <Nav className="Nav"/>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello" component={HelloWorldList}/>
        </main>
      </div>
    );
  }
}

export default App;
