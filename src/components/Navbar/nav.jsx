import React from "react";
import "./css/index.css";
import NavMessage from "../NavMessage/NavMessage.jsx";

function Navbar(props) {
    return (
        <nav className="Navbar-container">
            <ul className="Navbar-ul">
                <li className="Navbar-li">
                    <a href="/"><h1>Morty Poppers</h1></a>
                </li>
                <NavMessage score={props.score} topScore={props.topScore} />
                <li className="Navbar-li">
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;