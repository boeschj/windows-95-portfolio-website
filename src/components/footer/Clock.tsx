'use client';
import { useSyncExternalStore } from 'react';

const ONE_SECOND = 1000;
const SERVER_SNAPSHOT = '';

function subscribe(callback: () => void) {
    const id = setInterval(callback, ONE_SECOND);
    return () => {
        clearInterval(id);
    };
}

function getFormattedTime() {
    return new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });
}

export function Clock() {
    const time = useSyncExternalStore(
        subscribe,
        getFormattedTime,
        () => SERVER_SNAPSHOT
    );

    return (
        <div className="text-md grid h-8 w-28 content-center items-center px-3 text-center">
            {time}
        </div>
    );
}
