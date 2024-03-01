// Game.js
import React, { useState } from 'react';
import Board from './Board';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice();
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares: squares }]));
    setXIsNext(!xIsNext);
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const isBoardFull = current.squares.every((square) => square !== null);

  let status;
  if (winner) {
    status = 'Winner: ' + winner + ' 🎉';
  } else if (isBoardFull) {
    status = 'It\'s a draw!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleRestart = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setXIsNext(true);
  };
  return (
    <div className="game flex flex-col justify-center items-center h-screen">
        {(winner || isBoardFull) && (
          <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleRestart}>
            Restart Game
          </button>
        )}
      <div className="w-36 justify-center game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="border m-5 px-5  border-green-500 game-info">
      <div>{status}</div>
      </div>
    
    </div>
  );
}

export default Game;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
