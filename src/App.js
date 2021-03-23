import React from "react";
// import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
      </switch>
    </Router>
  );
}

export default App;
