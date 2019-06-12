import React, { Component } from 'react';
import './App.css';
import Pokertable from './Pokertable';
import ReactGA from 'react-ga';
import "./style.scss";

class App extends Component {


  render() {
    ReactGA.initialize('UA-141924115-1');
    ReactGA.pageview('/homepage');
    return (
      <div className="App">
        <h2>Enter player names</h2>
        <Pokertable></Pokertable>
      </div>
    );
  }
}

export default App;
