import React, { useState, useEffect, FunctionComponent } from 'react';

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;