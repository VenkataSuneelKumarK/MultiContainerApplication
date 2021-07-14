import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.scss';
const UsersList = props => {
    return (
        < Card >
            <ul className={classes.lists}>{props.users ? props.users.map(user => <li key={`${user.name}${user.age}`} >{user.name} ({user.age} years old)</li>) : "No users to display"}
            </ ul>
        </Card >
    );
};

export default UsersList;