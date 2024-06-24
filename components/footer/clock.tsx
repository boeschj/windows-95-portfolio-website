import React, { useEffect, useState } from 'react';

const Clock: React.FC = (): JSX.Element => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    const formattedDateString = dateState.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    return (
        <div
            suppressHydrationWarning
            className="h-8 w-28 text-center items-center text-md grid content-center px-3"
        >
            {formattedDateString}
        </div>
    );
};

export default Clock;
