import React, { useRef, useImperativeHandle } from "react";
import classes from "./InputWithLabel.module.scss";
const InputWithLabel = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const focus = () => {
        inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
        return {
            focus: focus
        };
    });
    return (
        <div
            className={`labelWithInput ${props.isValid === false ? classes.invalid : ""
                }`}
        >
            <label htmlFor="username">{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChangeHandler}
                onBlur={props.onBlurHandler}
            />
        </div>
    );
});

export default InputWithLabel;
