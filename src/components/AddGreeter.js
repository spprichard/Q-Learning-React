import React, {Component} from 'react'

class AddGreeter extends Component {
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addGreeting = this.addGreeting.bind(this);
        this.state = {
            greetingName: ''
        }
    }

    addGreeting(){
        this.props.addGreeting(this.state.greetingName);
        this.setState({
            greetingName: ''
        });
    }

    handleUpdate(event){
        this.setState({
            greetingName : event.target.value

        });
    }

    render(){
        return (
            <div className = "AddGreeter"> 
                <p className="Title">Enter your name:</p>
                <input type="text" onChange={this.handleUpdate} value={this.state.greetingName}/>
                &nbsp;&nbsp;
                <button onClick={this.addGreeting}>Add</button>
            </div>
        );
    }
}

export default AddGreeter;