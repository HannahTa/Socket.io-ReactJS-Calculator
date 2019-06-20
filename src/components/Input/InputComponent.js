import React, { Component } from 'react';
import Button from '../Button/ButtonComponent';
import './InputStyle.css'

class Hello extends Component {
  componentDidMount() {
    // this.props.socket.emit('Hello');
  }

  render() {
    return (
      <div className="button-container">
        <Button socket={this.props.socket} value="CE" />  {/* Clear input*/}
        <Button socket={this.props.socket} value="C" />  {/* Clear everything*/}
        <Button socket={this.props.socket} value="<" />
        <Button socket={this.props.socket} value="/" />
        <Button socket={this.props.socket} value="7" />
        <Button socket={this.props.socket} value="8" />
        <Button socket={this.props.socket} value="9" />
        <Button socket={this.props.socket} value="*" />
        <Button socket={this.props.socket} value="4" />
        <Button socket={this.props.socket} value="5" />
        <Button socket={this.props.socket} value="6" />
        <Button socket={this.props.socket} value="-" />
        <Button socket={this.props.socket} value="1" />
        <Button socket={this.props.socket} value="2" />
        <Button socket={this.props.socket} value="3" />
        <Button socket={this.props.socket} value="+" />
        <div></div>
        <Button socket={this.props.socket} value="0" />
        <div></div>
        <Button socket={this.props.socket} value="=" />
      </div>
    );
  }
}

export default Hello;

// Button Component
// Screen Component
// "Login" Component