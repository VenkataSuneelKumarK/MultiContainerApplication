import React, { useState } from "react";
import "./UserDashboard.scss";
import AddUser from "./Components/AddUser/AddUser";
import UsersList from "./Components/UsersList/UsersList";
function UserDashboard() {
    const [users, setUsers] = useState([]);
    const addUserHandler = user => {
        setUsers(prevUsers => {
            return [...prevUsers, user];
        });
    };
    return (
        <>
            <h3>User Dashboard</h3>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </>
    );
}

export default UserDashboard;
