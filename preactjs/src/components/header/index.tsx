import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/about">
                    About
                </Link>
                <Link activeClassName={style.active} href="/settings">
                    Settings
                </Link>
                <Link activeClassName={style.active} href="/play">
                    Play
                </Link>
            </nav>
        </header>
    );
};

export default Header;
