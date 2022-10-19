import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is ' + number);
        } else {
            setMessage('There is no number provided');
        }
    }, []);

    return (
        <div>
            <p>This is the About page</p>
            <p>{message}</p>
        </div>
    );
};

export default AboutPage;
