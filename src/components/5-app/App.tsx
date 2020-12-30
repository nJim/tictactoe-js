import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../3-organisms/Header";
import Footer from "../3-organisms/Footer";
import Play from "../4-templates/Play";
import AboutPage from "../4-templates/AboutPage";
import WelcomePage from "../4-templates/WelcomePage";
import SettingsPage from "../4-templates/SettingsPage";
import State from "../../lib/hoc/State";

const App = () => (
  <Router>
    <State>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/settings"><SettingsPage /></Route>
          <Route path="/play"><Play /></Route>
          <Route path="/"><WelcomePage /></Route>
        </Switch>
        <Footer />
      </div>
    </State>
  </Router>
);

export default App;
