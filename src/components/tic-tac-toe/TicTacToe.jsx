import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState(null);

  const calculateWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const [x, y, z] = pattern;
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z])
        return squares[x];
    }
    return null;
  };

  const Square = ({ value, onClick }) => {
    return (
      <button onClick={onClick} className="tic-tac-toe-square">
        {value}
      </button>
    );
  };

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    setSquares((s) =>
      s.map((square, i) => (i === index ? (isX ? "X" : "O") : square))
    );
    setIsX(!isX);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
    setStatus(null);
  };

  useEffect(() => {
    calculateWinner(squares)
      ? setStatus(`Winner is ${calculateWinner(squares)}\nPlease Restart the Game`)
      : squares.every((item) => item !== null)
      ? setStatus(`Match is Draw`)
      : setStatus(`Next Player is ${isX ? "X" : "O"}`);
  }, [squares, isX]);

  return (
    <div className="tic-tac-toe-wrapper">
      <div className="tic-tac-toe-container">
        <div className="tic-tac-toe-row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="tic-tac-toe-row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="tic-tac-toe-row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <h1>{status}</h1>
      <button className="tic-tac-toe-restart" onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
