import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <div className="Nav">
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/hello">Hello</Link>
            </div>
        )
    }
}

export default Nav