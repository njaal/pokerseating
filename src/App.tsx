import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokertable from './Pokertable';
import ReactGA from 'react-ga';

class App extends Component {


  render() {
    ReactGA.initialize('UA-141924115-1');
    ReactGA.pageview('/homepage');
    return (
      <div className="App">
        <Pokertable></Pokertable>
      </div>
    );
  }
}

export default App;
