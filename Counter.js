import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="button-container">
        <button
          className="counter-btn increment-btn"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="counter-btn decrement-btn"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
