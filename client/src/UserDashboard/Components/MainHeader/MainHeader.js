import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.scss";
const MainHeader = props => {
    return (
        <>
            <header className="kvs_header">
                KVS{" "}
                {props.isLoggedIn && (
                    <Link to="/" className={classes.logout} onClick={props.onLogout}>
                        Log Out
                    </Link>
                )}
            </header>
        </>
    );
};

export default MainHeader;
