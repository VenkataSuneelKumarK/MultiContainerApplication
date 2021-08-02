import React from "react";

import classes from "./Button.module.scss";

const Button = props => {
    return (
        <button
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onClick}
            disabled={props.disable || false}
        >
            {props.children}
        </button>
    );
};

export default Button;
