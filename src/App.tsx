import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeComp from "./pages/home";
import HeaderComp from "./components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComp />

        <Switch>
          <Route path="/products">
            <p>Products page!</p>
          </Route>
          <Route path="/teams">
            <p>Teams page!</p>
          </Route>
          <Route path="/about">
            <p>About page!</p>
          </Route>
          <Route path="/">
            <HomeComp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
