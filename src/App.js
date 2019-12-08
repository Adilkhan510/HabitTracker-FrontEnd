import React from 'react';
import './App.css';
import HabitsContainer from './Components/Containers/HabitsContainer'
import NavBar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HabitsContainer />
    </div>
  );
}

export default App;
