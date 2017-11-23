import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.frenchify = this.frenchify.bind(this)
    this.resetGreeting = this.resetGreeting.bind(this)
    this.state = {
      greeting: "Hello "
    };
    
  }

  frenchify(){
    this.setState({
      greeting: "Bonjur "
    });
  }

  resetGreeting(){
    this.setState({
      greeting: "Hello "
    });
  }

  render() {
    return (
      <div className="HelloWorld">
        <h1>{this.state.greeting} {this.props.name}!</h1>
        <br/>
        <button className="RegularButton" onClick={this.frenchify}>Frenchify!</button>
        <button className="ResetButton" onClick={this.resetGreeting}>Reset</button>
      </div>
    );
  }
}

export default HelloWorld;
