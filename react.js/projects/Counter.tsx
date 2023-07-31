import React, { useState, useEffect, FunctionComponent } from "react";

const Counter: FunctionComponent = () => {
    const [count, setCount] = useState<number>(() => {
        const savedCount = localStorage.getItem("count"); // Check local storage for count
        return savedCount !== null ? Number(savedCount) : 0;
    });

    const increment = () => {
        setCount((prevCount: number) => (prevCount < 5 ? prevCount + 1 : prevCount));
    };

    const decrement = () => {
        setCount((prevCount: number) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const reset = () => {
        setCount(0);
    };

    useEffect(() => {
        localStorage.setItem("count", count.toString()); // Persist count to local storage
        document.title = `Count: ${count}`;

        return () => {
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
3;

export default Counter;
