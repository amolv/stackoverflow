import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePageComp from "./pages/homePage";
import HeaderComp from "./components/header";
import SearchPageComp from "./pages/searchPage";
import QuestionSinglePageComp from "./pages/questionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComp />
        <section className="container">
          <Switch>
            <Route path="/" exact>
              <HomePageComp />
            </Route>
            <Route path="/questions/ask">
              <h2>Ask a public question</h2>
            </Route>
            <Route path="/questions/:qId">
              <QuestionSinglePageComp />
            </Route>
            <Route path="/products">
              <p>Products page!</p>
            </Route>
            <Route path="/teams">
              <p>Teams page!</p>
            </Route>
            <Route path="/about">
              <p>About page!</p>
            </Route>
            <Route path="/search">
              <SearchPageComp />
            </Route>
            <Route path="*">
              <p>404</p>
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
