import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValComp from './ValComp/ValComp'
import CharComp from './CharComp/CharComp'


class App extends Component {

  state = {length: 0, string: ''}

  lengthChangeHandler = (event) => {
    const length = event.target.value.length
    this.setState({length: length});
    const list = event.target.value;
    this.setState({string: list})
    }

  removeCharacter = (characterIndex) => {
    const list = this.state.string.substring(0,characterIndex) + this.state.string.substring(characterIndex+1);
this.setState({string: list});
  }

  render() {
let person = (<div>
        {Array.from(this.state.string).map((single, index) =>{
          return <CharComp character = {single} click = {() => this.removeCharacter(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <input type = "text" onChange={(event) => this.lengthChangeHandler(event)} value ={this.state.string}/>
        <p>{this.state.length}</p>
        <ValComp length= {this.state.length}/>
        {person}
      </div>
    );
  }
}

export default App;
