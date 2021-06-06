import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchComp from "./components/search";

import HomeComp from "./pages/home";

function App() {
  const getSearchKey = (searchStr: string) => {
    console.log("getSearchKey", searchStr);
  };
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <SearchComp getSearchKey={getSearchKey} />
        </header>

        <Switch>
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
