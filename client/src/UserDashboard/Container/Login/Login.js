import React, {
    useContext,
    useEffect,
    useReducer,
    useState,
    useRef
} from "react";
import Card from "../../Components/UI/Card";
import Button from "../../Components/UI/Button/Button";
import Modal from "../../Components/UI/Modal/Modal";
import AuthContext from "../../Store/auth-context";
import InputWithLabel from "../../Components/UI/InputWithLabel/InputWithLabel";

const userNameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    } else if (action.type === "BLUR_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    return state;
};
const Login = props => {
    const ctx = useContext(AuthContext);
    const userNameRef = useRef();
    const passwordRef = useRef();
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
        if (!userNameState.isValid) {
            userNameRef.current.focus();
        } else if (!isUserPasswordValid) {
            passwordRef.current.focus();
        } else {
            ctx.onLogin(userNameState.value, userPassword);
            console.log("login");
        }
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
                    <InputWithLabel
                        ref={userNameRef}
                        isValid={userNameState.isValid}
                        label="Username"
                        type="text"
                        id="username"
                        value={userNameState.value}
                        onChangeHandler={setUserNameHandler}
                        onBlurHandler={onBlurNameHandler}
                    />
                    <InputWithLabel
                        ref={passwordRef}
                        isValid={isUserPasswordValid}
                        label="Password"
                        type="password"
                        id="password"
                        value={userPassword}
                        onChangeHandler={setUserPasswordHandler}
                        onBlurHandler={onBlurPasswordHandler}
                    />

                    <Button type="submit" disable={isValid}>
                        <span>Login</span>
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
