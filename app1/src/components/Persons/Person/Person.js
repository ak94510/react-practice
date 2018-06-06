import React, {Component} from 'react';
import classes from'./Person.css';
import WithClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';
class Person extends Component {
  render () {
    return(
      <WithClass class ={classes.Person}>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick ={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type = "text" onChange={this.props.changed} value = {this.props.name}/>
      </WithClass>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change:PropTypes.func
}

export default Person;
