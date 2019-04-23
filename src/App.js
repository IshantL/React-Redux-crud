import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="games">Games</Link>
        <Route exact path='/games' component={GamesPage}/>
      </header>
      
    </div>
  );
}

export default App;
