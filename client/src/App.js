
function App() {
    return (
        <Router>
            <div className="">
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
            </div>
        </Router>
    );
}

export default App;
