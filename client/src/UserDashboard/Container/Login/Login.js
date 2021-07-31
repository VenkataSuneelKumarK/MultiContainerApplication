import React, { useState } from "react";
import Card from "../../Components/UI/Card";
import Button from "../../Components/UI/Button/Button";
import Modal from "../../Components/UI/Modal/Modal";
const Login = props => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState();
    const setUserNameHandler = event => {
        setUserName(event.target.value);
    };
    const setUserPasswordHandler = event => {
        setUserPassword(event.target.value);
    };
    const loginHandler = event => {
        event.preventDefault();
        props.onLogin(userName, userPassword);
        console.log("login");
    };
    const onClose = event => {
        setError();
    };
    return (
        <>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    buttonText="Close"
                    onButtonClicked={onClose}
                />
            )}
            <Card>
                <form className="userdashboard-form" onSubmit={loginHandler}>
                    <div className="labelWithInput">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={userName}
                            onChange={setUserNameHandler}
                        />
                    </div>
                    <div className="labelWithInput">
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="password"
                            value={userPassword}
                            onChange={setUserPasswordHandler}
                        />
                    </div>
                    <Button type="submit">
                        <span>Login</span>
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
