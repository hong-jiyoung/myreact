import "./ChessBoard.css";
import { Piece } from "react-chessboard/dist/chessboard/types";
import React, { useEffect, useState } from "react";

function ChessGame() {
  const [board, setBoard] = useState([
    // 초기 체스 보드 상태를 설정합니다.
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ]);

  const renderSquare = (piece, row, col) => {
    return (
      <div
        key={`${row}-${col}`}
        className={`square ${row % 2 === col % 2 ? "even" : "odd"}`}
      >
        {piece}
      </div>
    );
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((piece, colIndex) => renderSquare(piece, rowIndex, colIndex))}
      </div>
    ));
  };

  return <div className="chess-board">{renderBoard()}</div>;
}

export default ChessGame;
