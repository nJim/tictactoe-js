import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import WelcomePage from "../4-templates/WelcomePage";
import AboutPage from "../4-templates/AboutPage";
import Play from "../4-templates/Play";
import SettingsPage from "../4-templates/SettingsPage";
import Footer from "../3-organisms/Footer";
import Header from "../3-organisms/Header";
import * as style from "./App.css";

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id={style.app}>
            <Header />
            <Router onChange={handleRoute}>
                <Route path="/" component={WelcomePage} />
                <Route path="/about/" component={AboutPage} />
                <Route path="/play/" component={Play} />
                <Route path="/settings/" component={SettingsPage} />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
