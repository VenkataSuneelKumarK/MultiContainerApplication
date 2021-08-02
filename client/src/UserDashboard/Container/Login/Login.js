import React, { useEffect, useReducer, useState } from "react";
import Card from "../../Components/UI/Card";
import Button from "../../Components/UI/Button/Button";
import Modal from "../../Components/UI/Modal/Modal";
import classes from "./Login.module.scss";

const userNameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    } else if (action.type === "BLUR_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    return state;
};
const Login = props => {
    //const [userName, setUserName] = useState("");
    //const [isUserNameValid, setUserNameValid] = useState();
    const [userPassword, setUserPassword] = useState("");
    const [isUserPasswordValid, setUserPasswordValid] = useState();
    const [error, setError] = useState();
    const [isValid, setIsValid] = useState(false);

    const [userNameState, userNameDispatch] = useReducer(userNameReducer, {
        value: "",
        isValid: null
    });

    /* runs always
      * useEffect(() => {
          console.log("useEffect::valid");
          setIsValid(userName.includes("@") && userPassword.length > 7);
      });*/

    /* with empty array, its only didmount
      * useEffect(() => {
          console.log("useEffect::valid");
          setIsValid(userName.includes("@") && userPassword.length > 7);
      }, []);*/

    // runs only [userName, userPassword] changes with properties in array
    // same as prevProps or prevState inside componentDidUpdate
    useEffect(
        () => {
            //if (userName) {
            //    setUserNameValid(userName.includes("@"));
            //}
            if (userPassword) {
                setUserPasswordValid(userPassword.length > 7);
            }
            // Debounce --> Validating after user stop typing
            const timer = setTimeout(() => {
                console.log("Checking form validity");
                setIsValid(
                    userNameState.value.includes("@") && userPassword.length > 7
                );
            }, 500);
            console.log("useEffect::valid");
            return () => {
                console.log("Cleaning the timer");
                clearTimeout(timer);
            };
        },
        [userNameState.value, userPassword]
    );
    const setUserNameHandler = event => {
        //setUserName(event.target.value);
        userNameDispatch({ type: "USER_INPUT", val: event.target.value });
    };
    const setUserPasswordHandler = event => {
        setUserPassword(event.target.value);
    };
    const onBlurNameHandler = event => {
        userNameDispatch({ type: "BLUR_INPUT", val: event.target.value });
    };
    const onBlurPasswordHandler = event => {
        setUserPassword(event.target.value);
    };
    const loginHandler = event => {
        event.preventDefault();
        props.onLogin(userNameState.value, userPassword);
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
                    <div
                        className={`labelWithInput ${userNameState.isValid === false ? classes.invalid : ""
                            }`}
                    >
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={userNameState.value}
                            onChange={setUserNameHandler}
                            onBlur={onBlurNameHandler}
                        />
                    </div>
                    <div
                        className={`${isUserPasswordValid === false ? classes.invalid : ""
                            }`}
                    >
                        <div className="labelWithInput">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                id="password"
                                value={userPassword}
                                onChange={setUserPasswordHandler}
                                onBlur={onBlurPasswordHandler}
                            />
                        </div>
                    </div>
                    <Button type="submit" disable={!isValid}>
                        <span>Login</span>
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
