import React from "react";
import classes from "./Modal.module.scss";
import Card from "../Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onButtonClicked} />;
};

const ModalOverlay = props => {
    return (
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
    );
};
const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onButtonClicked={props.onButtonClicked} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    onButtonClicked={props.onButtonClicked}
                    title={props.title}
                    message={props.message}
                    buttonText={props.buttonText}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default Modal;
