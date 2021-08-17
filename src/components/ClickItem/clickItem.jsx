import React from "react";
import "./css/index.css";

function ClickItem(props) {
    return (
        <div 
            className={`ClickItem-container${props.shake ? " shake " : ""}`}
            onClick={() => props.handleClick(props.id)}
            style={{backgroundImage: `url("${props.image}")`}}
            role="img"
            aria-label="click item"
        />
    );
}

export default ClickItem;