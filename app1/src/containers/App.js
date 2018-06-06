import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);
class App extends PureComponent {

  constructor(props) {
    super(props);
  }
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }

  nameChangedHandler = (event, id) =>{
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;

      const persons = [... this.state.persons];
      persons[personIndex] = person;
      this.setState({  persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    } );
}

  loginHandler = () => {
    this.setState({authenticated: true});
  }


  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null

    if(this.state.showPersons){
      persons =
          <Persons persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>;
    }
    return (
      <WithClass classes = {classes.App}>
        <button onClick = {() => {this.setState({showPersons: true})}}> Show Persons</button>
        <Cockpit showPersons = {this.state.showPersons}
          persons = {this.state.persons} clicked = {this.togglePersonsHandler} appTitle = {this.props.title}
          login = {this.loginHandler}/>
        <AuthContext.Provider value = {this.state.authenticated}>{persons}</AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
