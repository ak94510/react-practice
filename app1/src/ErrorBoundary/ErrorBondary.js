import React, {Component} from 'react';

class ErrorBondary extends Component{
  state = {
    haserror: false,
    errormessage: ''
  }

  componentDidCatch = (error,info) => {
    this.setState({haserror: true, errormessage: error});
  }
  render() {
    if(this.state.haserror){
          return <h1>{this.state.errormessage}</h1>;

    }else {
      return this.props.children;
    }
  }
}

export default ErrorBondary;
