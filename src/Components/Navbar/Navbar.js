import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import habit from './Images/habit.png'

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <img src={habit} width="100" height="70" class="d-inline-block align-top" alt="" />
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
