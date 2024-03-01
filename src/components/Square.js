// Square.js
import React from 'react';

function Square({ value, onClick }) {
  let squareColorClass = '';

  if (value === 'X') {
    squareColorClass = 'bg-yellow-300'; // Yellow for 'X'
  } else if (value === 'O') {
    squareColorClass = 'bg-red-300'; // Red for 'O'
  }

  return (
    <button className={`bg-white border border-gray-300 p-4 text-xl font-semibold w-12 h-12 ${squareColorClass}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;

