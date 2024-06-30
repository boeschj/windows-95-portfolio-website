'use client';
import React, { useEffect, useState, useCallback } from 'react';

const ONE_SECOND = 1000;

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
        const intervalId = setInterval(updateTime, ONE_SECOND);

        return () => {
            clearInterval(intervalId);
        };
    }, [updateTime]);

    return (
        <div className="text-md grid h-8 w-28 content-center items-center px-3 text-center">
            {time}
        </div>
    );
};
