import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.frenchify = this.frenchify.bind(this)
    this.resetGreeting = this.resetGreeting.bind(this)
    this.removeGreeting = this.removeGreeting.bind(this)
    this.state = {
      greeting: "Hello "
    };
    
  }

  frenchify(){
    this.setState({
      greeting: "Bonjour "
    });
  }

  resetGreeting(){
    this.setState({
      greeting: "Hello "
    });
  }

  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }

  render() {
    return (
      <div className="HelloWorld">
        <h1>{this.state.greeting} {this.props.name}!</h1>
        <br/>
        <button className="FrenchifyButton" onClick={this.frenchify}>Frenchify!</button>
        <button className="ResetButton" onClick={this.resetGreeting}>Reset</button>
        <button className="RemoveButton" onClick={this.removeGreeting}>Remove Me</button>
      </div>
    );
  }
}

export default HelloWorld;
