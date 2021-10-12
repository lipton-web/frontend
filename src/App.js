// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import AddAccount from './pages/AddAccount';
import EditAccount from './pages/EditAccount';


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Main}/>
      <Route path="/add"><AddAccount /></Route>
      <Route path="/edit"><EditAccount /></Route>
    </div>
  );
}

export default App;
