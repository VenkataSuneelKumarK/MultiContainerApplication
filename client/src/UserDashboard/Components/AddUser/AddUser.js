import React, { useState, useRef } from "react";
import "./AddUser.scss";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
const AddUser = props => {
    console.log("AddUser");
    /*const [user, addUserInfo] = useState({
                                            userName: "",
                                            age: ""
                                        });*/
    const [enteredUsername, setUsername] = useState("");
    const [enteredAge, setAge] = useState("");
    const [error, setError] = useState();
    const userNameRef = useRef();
    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    };
    const ageChangeHandler = event => {
        setAge(event.target.value);
    };

    const onClose = event => {
        setError();
    };
    const addUserHandler = event => {
        event.preventDefault();

        if (
            userNameRef.current.value.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age(non-empty values)."
            });
            return;
        }
        if (!parseInt(enteredAge) || +enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age(>0)"
            });
            return;
        }
        props.onAddUser({ name: userNameRef.current.value, age: enteredAge });
        setUsername(""); // we can do but not prefered as making use of native DOM instead of react userNameRef.current.value = '';
        setAge("");
        /*addUserInfo(state => {
                                                                                        return {
                                                                                            userName: "",
                                                                                            age: ""
                                                                                        };
                                                                                    });*/
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
                <form className="userdashboard-form" onSubmit={addUserHandler}>
                    <div className="labelWithInput">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                            ref={userNameRef}
                        />
                    </div>
                    <div className="labelWithInput">
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            type="text"
                            id="age"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                        />
                    </div>
                    <Button type="submit">
                        <span>Add User</span>
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;
