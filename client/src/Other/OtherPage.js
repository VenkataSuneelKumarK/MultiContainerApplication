import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
    return (
        <div>
            Welcome to other page
            <Link to="/">Go back Home</Link>
        </div>
    );
}

export default OtherPage;