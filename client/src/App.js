import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./Other/OtherPage";
import Fibonacci from "./Fibonacci/Fibonacci";
import UserDashboard from "./UserDashboard/Container/UserDashboard";
import MainHeader from "./UserDashboard/Components/MainHeader/MainHeader";
import Login from "./UserDashboard/Container/Login/Login";
import AuthContext from "./UserDashboard/Store/auth-context";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <Router>
            <div className="kvs">
                <MainHeader />
                {ctx.isLoggedIn ? (
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
                            <Login>Please login</Login>
                        </main>
                    )}
            </div>
        </Router>
    );
}

export default App;
