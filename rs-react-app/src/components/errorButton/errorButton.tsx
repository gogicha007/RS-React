import { Component } from 'react';

class ErrorButton extends Component {
  errorThrown = () => {
    throw new Error('Oops...');
  };

  render() {
    return <button onClick={this.errorThrown}>Error Thrower</button>;
  }
}

export default ErrorButton;
