import React, { useEffect, useState } from 'react';

const CounterHooks = () => {

    const [count, setCount] = useState(0);

    useEffect(() => setCount((c) => c + 1), []);

    const handleAdd = (e) => {
        e.preventDefault();
        setCount((c) => c + 1);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        if (count === 0) {
            alert('Do not accept negative numbers');
            return;
        }
        setCount((c) => c - 1);
    };

    return (
        <React.Fragment>
            <h1>Counter Hooks</h1>
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </React.Fragment>
    )
}

export default CounterHooks;
