import React, { Component } from 'react';
import HelloWorld from "./HelloWorld";
import AddGreeter from "./AddGreeter";

class HelloWorldList extends Component{
    constructor(props){
        super(props);
        this.addGreeting = this.addGreeting.bind(this);
        this.state = {
            greetings: []
        }
    }

    addGreeting(newName){
        this.setState({
            greetings: [...this.state.greetings, newName]
        });
    }

    renderGreetings(){
        return this.state.greetings.map(name => (
            <HelloWorld key={name} name={name}/>
        ));
    }


    render(){
        return(
        <div className="HelloWorldList">
            <AddGreeter addGreeting={this.addGreeting}/>
            {this.renderGreetings()}
        </div>
        );
    }
}

export default HelloWorldList;