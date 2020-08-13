import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"/>
      </header>

      <Clock/>
    </div>
  )
}

export default App;

