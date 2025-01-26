// src/components/Counter.js
import React from 'react';

function counter({ count, onIncrement }) {
  return (
    <div>
      <p>This is how many searches you have made: <span id="search-count">{count}</span></p>
      <button onClick={onIncrement}>Increment Counter</button>
    </div>
  );
}

export default counter;
