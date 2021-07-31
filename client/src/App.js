import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./Other/OtherPage";
import Fibonacci from "./Fibonacci/Fibonacci";
import UserDashboard from "./UserDashboard/UserDashboard";

function App() {
    return (
        <Router>
            <div className="kvs">
                <header className="kvs-header">KVS</header>
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
            </div>
        </Router>
    );
}

export default App;
