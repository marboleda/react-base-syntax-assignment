import React from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

function App() {
  return (
    <div className="App">
      <UserOutput username="username1" />
      <UserOutput username="username2" />
    </div>
  );
}

export default App;
