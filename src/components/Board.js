// Board.js
import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
     <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
  {renderSquare(0)}
</div>

      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(1)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(2)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(3)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(4)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(5)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(6)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-200">
        {renderSquare(7)}
      </div>
      <div className="flex justify-center items-center w-1/3 border border-green-500 bg-green-400">
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
