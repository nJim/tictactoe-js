import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../3-organisms/Header";
import Footer from "../3-organisms/Footer";
import Play from "../4-templates/Play";
import Welcome from "../4-templates/Welcome";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/about">
          <>about</>
        </Route>
        <Route path="/settings">
          <>about</>
        </Route>
        <Route path="/play">
          <Play />
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
