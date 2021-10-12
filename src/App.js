<<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';

=======
import logo from './logo.svg';
import './App.css';
>>>>>>> 7b16f327d8d9872f88d2b7e6675095a28ae46a4c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Route path="/" exact component={Main}/>
      <Route path="/add"><AddAccount /></Route>
      <Route path="/edit"><EditAccount /></Route>
=======
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
      </header>
>>>>>>> 7b16f327d8d9872f88d2b7e6675095a28ae46a4c
    </div>
  );
}

export default App;
