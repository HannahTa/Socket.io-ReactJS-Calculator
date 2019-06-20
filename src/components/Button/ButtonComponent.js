import React, { Component } from 'react';
import './ButtonStyle.css'

class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.socket.emit("sendInput", this.props.value);
  }

  render() {
    return (
      <button className="button" onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}

export default Button;

// Button Component
// Screen Component
// "Login" Component