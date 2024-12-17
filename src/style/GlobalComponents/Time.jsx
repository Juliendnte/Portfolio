// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' });
            const date = new Date(now);
            const hours = date.getHours();
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');

            setTime(`France (${hours % 12 || 12}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'})`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        // Nettoyage à la fin
        return () => clearInterval(interval);
    }, []);

    return (
        <h1>{time}</h1>
    );
};

export default Time;
