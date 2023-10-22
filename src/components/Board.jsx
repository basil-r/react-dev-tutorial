import PropTypes from "prop-types";

import { calculateWinner } from "../utils";

import Square from "./Square";

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  const sign = xIsNext ? "X" : "O";
  const status = winner ? `Winner: ${winner}` : `Next player: ${sign}`;

  const handleClick = (i) => {
    if (winner || squares[i]) return;

    const nextSquares = [...squares];
    nextSquares[i] = sign;

    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default Board;
