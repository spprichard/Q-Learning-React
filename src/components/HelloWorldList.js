import React, { Component } from 'react';
import HelloWorld from "./HelloWorld"

class HelloWorldList extends Component{
    render(){
        return(
        <div className="HelloWorldList">
            <HelloWorld name="Tess"/>
            <HelloWorld name="Steven"/>
        </div>
        );
    }
}

export default HelloWorldList;