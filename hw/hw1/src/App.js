import React, { Component } from 'react';
import logo from './logo.svg';
import UserInput from './Componenets/UserInput';
import UserOutput from './Componenets/UserOutput';
import './App.css';

class App extends Component {

  state = {
  holder: 'username'
}

  stateChangedHandler = (event) =>{
    this.setState({holder: event.target.value})
}


  render() {
    return (
      <div className="App">
        <UserInput holder = {this.state.holder} changed ={this.stateChangedHandler.bind(this,)}/>
        <UserOutput holder = {this.state.holder}/>
        <UserOutput holder = {this.state.holder}/>
      </div>
    );
  }
}

export default App;
