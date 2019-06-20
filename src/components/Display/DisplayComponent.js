import React, { Component } from 'react';
import './DisplayStyle.css'

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: '',
      equation: ''
    }
  }
  componentDidMount() {
    this.props.socket.on("setOutput", (display) => {
      this.setState({
        output: display.output,
        equation: display.inputArray.join().replace(/,/g, ' ')
      })
    });
    
    this.props.socket.emit('getOutput');
  }

  render() {
    return (
      <div className="container">
        <h3 className="equation">{this.state.equation}</h3>
        <h1 className="output">{this.state.output}</h1>
      </div>
    );
  }
}

export default Display;

// Button Component
// Screen Component
// "Login" Component