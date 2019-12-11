import React, { Component } from 'react'
import habits from './images/habits.png'
import Signup from '../Auth/SignUp'

export class Home extends Component {
    render() {
        return (
            <div main-page>
                <div>
                    <Signup />
                </div>
            </div>
        )
    }
}

export default Home
