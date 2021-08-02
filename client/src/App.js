import "./App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./Other/OtherPage";
import Fibonacci from "./Fibonacci/Fibonacci";
import UserDashboard from "./UserDashboard/Container/UserDashboard";
import MainHeader from "./UserDashboard/Components/MainHeader/MainHeader";
import Login from "./UserDashboard/Container/Login/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserInfo = localStorage.getItem("isLoggedIn");
        if (storedUserInfo === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logOutHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "0");
        setIsLoggedIn(false);
    };
    return (
        <Router>
            <div className="kvs">
                <MainHeader isLoggedIn={isLoggedIn} onLogout={logOutHandler} />
                {isLoggedIn ? (
                    <>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Fibonacci</Link>
                                </li>
                                <li>
                                    <Link to="/otherpage">Other Page</Link>
                                </li>
                                <li>
                                    <Link to="/userdashboard">User Dashboard</Link>
                                </li>
                            </ul>
                        </nav>
                        <main>
                            <Routes>
                                <Route path="/otherpage">
                                    <OtherPage />
                                </Route>
                                <Route path="/userdashboard">
                                    <UserDashboard />
                                </Route>
                                <Route path="/">
                                    <Fibonacci />
                                </Route>
                            </Routes>
                        </main>
                    </>
                ) : (
                        <main>
                            <Login onLogin={loginHandler}>Please login</Login>
                        </main>
                    )}
            </div>
        </Router>
    );
}

export default App;
