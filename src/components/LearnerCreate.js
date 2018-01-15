import React, { Component } from 'react';
import {postToServer, getFromServer} from '../helpers/helpers';
import { log } from 'util';

class LearnerCreate extends Component {
    sendCreateRequest() {
        // process.env.SERVER_PATH = process.env.SERVER_PATH || '//localhost:8000'
        
        // fetch("/api/create/learner", {
        fetch("/", { 
        accept: 'application/json',
        })
        .then(res => {
            console.log(".then - res: ", res)
        });
    }

    render() {
        return (
            <div>
                <h1>Learner Create</h1>
                <button onClick={this.sendCreateRequest}>Create Learner</button>
            </div>
        )
    }
}

export default LearnerCreate;
