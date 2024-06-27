'use client';
import React, { useEffect, useState, useCallback } from 'react';

export const Clock: React.FC = () => {
    const [time, setTime] = useState<string>('');

    const updateTime = useCallback(() => {
        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        });
        setTime(formattedTime);
    }, []);

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [updateTime]);

    return (
        <div className="h-8 w-28 text-center items-center text-md grid content-center px-3">
            {time}
        </div>
    );
};
