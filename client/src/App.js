import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./Other/OtherPage";
import Fibonacci from "./Fibonacci/Fibonacci";
import UserDashboard from "./UserDashboard/UserDashboard";

function App() {
    return (
        <Router>
            <div className="kvs">
                <header className="">KVS</header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/otherpage">Other Page</Link>
                        </li>
                        <li>
                            <Link to="/userdashboard">User Dashboard</Link>
                        </li>
                    </ul>
                </nav>
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
            </div>
        </Router>
    );
}

export default App;
