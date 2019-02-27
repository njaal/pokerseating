import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokertable from './Pokertable';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Pokertable></Pokertable>
      </div>
    );
  }
}

export default App;
