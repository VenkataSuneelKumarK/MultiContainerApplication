import React from "react";
import classes from "./Modal.module.scss";
import Card from "../Card";
import Button from "../Button/Button";
const Modal = props => {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onButtonClicked} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.footer}>
                    <Button type="button" onClick={props.onButtonClicked}>
                        {props.buttonText}
                    </Button>
                </footer>
            </Card>
        </>
    );
};

export default Modal;
