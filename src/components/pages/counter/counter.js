import React, { useEffect, useState } from 'react';
import "./counter.scss"

const Counter = () => {

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
            <div className="counter-container">
                <div className="counter-card">
                    <h3 className="counter-card-title">Counter</h3>
                    <div className="counter-card-items-container">
                        <span className="counter-card-subtitle">Quantity: {count}</span>
                        <button className="btn btn-primary btn-block counter-card-add" onClick={handleAdd}>Add</button>
                        <button className="btn btn-primary btn-block counter-card-remove" onClick={handleRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter;
