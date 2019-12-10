import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                </a>
                {this.props.currentUser ? 
                <Link onClick={this.props.logout}>Logout</Link>
                :
                <Link to="/login">Login</Link>}

            </nav>
        )
    }
}

export default Navbar
