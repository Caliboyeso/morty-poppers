import React from "react";
import "./css/index.css";

function Main(props) {
    return (
        <main className="Main-container">{props.children}</main>
    );
}

export default Main;