import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import './App.css';
import HabitsContainer from './Components/Containers/HabitsContainer'
import Navbar from './Components/Navbar/Navbar'
import Routes from './config/Routes'
import Axios from 'axios';

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

  logout = ()=>{
    this.setState({
      currentUser : '',
      username : '',
    })
    localStorage.removeItem('uid');
    localStorage.removeItem('username')
    this.props.history.push('/',)
  }
  render() {
    return(
      <div className="App">
        <div>
          <Navbar currentUser={this.state.currentUser} logout={this.logout} />
          <Routes setCurrentUser={this.setCurrentUser} user={this.state.currentUser} />
        </div>
      </div>
    )
  };
}

export default withRouter(App);
