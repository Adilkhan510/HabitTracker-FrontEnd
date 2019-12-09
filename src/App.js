import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import HabitsContainer from './Components/Containers/HabitsContainer'
import Navbar from './Components/Navbar/Navbar'
import Routes from './config/Routes'

class App extends Component{
  state = {
    currentUser: localStorage.getItem('uid'),
    username: localStorage.getItem('username'),
  };

  setCurrentUser = (userId, username) => {
    this.setState({ currentUser: userId, username });
    localStorage.setItem('uid', userId);
    localStorage.setItem('username', username);
  };
  render() {
    return(
      <div className="App">
        <div>
          <Navbar />
          <Routes setCurrentUser={this.setCurrentUser} />
        </div>
      </div>
    )
  };
}

export default withRouter(App);
