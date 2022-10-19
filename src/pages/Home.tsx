import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>This is the homepage</p>
            <Link to="/about">About page</Link> <br />
            <button onClick={() => navigate('/about/34343')}>Goto to About page with number</button>
        </div>
    );
};

export default HomePage;
