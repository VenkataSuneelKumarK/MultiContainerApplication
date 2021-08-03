import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/auth-context";
import classes from "./MainHeader.module.scss";
/*const MainHeader = props => {
    return (
        <AuthContext.Consumer>
            {ctx => (
                <header className="kvs_header">
                    KVS{" "}
                    {ctx.isLoggedIn && (
                        <Link to="/" className={classes.logout} onClick={ctx.onLogout}>
                            Log Out
                        </Link>
                    )}
                </header>
            )}
        </AuthContext.Consumer>
    );
};*/
const MainHeader = props => {
    const ctx = useContext(AuthContext);
    return (
        <header className="kvs_header">
            KVS{" "}
            {ctx.isLoggedIn && (
                <Link to="/" className={classes.logout} onClick={ctx.onLogout}>
                    Log Out
                </Link>
            )}
        </header>
    );
};

export default MainHeader;
