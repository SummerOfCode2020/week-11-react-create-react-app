import React from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
constructor (props) {
  super(props)
  this.state = {
    displayTime: new Date().toLocaleTimeString(),
    visitorName: "JR"
  }
}

componentDidMount () {
  this.timerId = setInterval(() => {
    this.tick()
  }, 1000);
}

tick () {
  console.log("In tick")
  this.setState({
    displayTime: new Date().toLocaleTimeString()
    })
}

  render () {
    let displayTime = this.state.displayTime
    let visitorName = this.state.visitorName

    return (
      <div className="clock">
        <h2>Time is {displayTime}</h2>
        <div>
          Thanks for visiting {visitorName}
        </div>
      </div>
    )
  }
}

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

