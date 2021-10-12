// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Main}/>
    </div>
  );
}

export default App;
