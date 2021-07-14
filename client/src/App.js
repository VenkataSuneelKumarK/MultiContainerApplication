import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './Other/OtherPage';
import Fibonacci from './Fibonacci/Fibonacci';

function App() {
    return (
        <Router>
            <div className="">
                <header className="">
                    KVS
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/otherpage">Other Page</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div>
                    aaa
                    <Routes>
                        <Route path="/otherpage">
                            <OtherPage />
                        </Route>
                        <Route path="/">
                            <Fibonacci />
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
