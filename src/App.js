import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Board from "./Board";
import Footer from "./Footer";
import Welcome from "./Welcome";

const App = () => (
  <Router>
    <div className="layout">
      <Nav />
      <Switch>
        <Route path="/about">
          <>about</>
        </Route>
        <Route path="/settings">
          <>about</>
        </Route>
        <Route path="/play">
          <Board />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
