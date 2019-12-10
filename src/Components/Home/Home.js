import React, { Component } from 'react'
import habits from './images/habits.png'

export class Home extends Component {
    render() {
        return (
            <div main-page>
                <div>
                    <img src={habits} style={{width: "100vw", height: '100vh'}} />
                </div>
            </div>
        )
    }
}

export default Home
