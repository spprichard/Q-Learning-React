import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.frenchify = this.frenchify.bind(this)
    this.state = {
      greeting: "Hello "
    };
    
  }

  frenchify(){
    this.setState({
      greeting: "Bonjur "
    });
  }

  render() {
    return (
      <div className="HelloWorld">
        <h1>{this.state.greeting} {this.props.name}!</h1>
        <br/>
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
}

export default HelloWorld;
