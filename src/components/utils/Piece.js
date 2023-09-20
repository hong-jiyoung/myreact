import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ChessSquare from "./ChessSquare"; // 보드의 각 칸을 나타내는 컴포넌트
import { ItemTypes } from "./ItemTypes"; // 아이템 타입 정의

const ChessBoard = ({ board, onMovePiece }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="chess-board">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <ChessSquare
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              piece={piece}
              onMovePiece={onMovePiece}
              canDrop={(piece) => canDrop(row, col, piece)}
              isOver={isOver(row, col)}
            />
          ))
        )}
      </div>
    </DndProvider>
  );
};

// 아이템을 떨어뜨릴 수 있는지 여부를 확인하는 함수 (게임 규칙에 따라 구현)
const canDrop = (row, col, piece) => {
  // 여기에 게임 규칙을 구현하세요.
  // 예: 해당 위치에 해당 말을 놓을 수 있는지 여부를 반환합니다.
};

// 해당 위치에 드래그한 아이템이 있는지 여부를 확인하는 함수 (게임 규칙에 따라 구현)
const isOver = (row, col) => {
  // 여기에 게임 규칙을 구현하세요.
  // 예: 해당 위치에 다른 말이 있는지 여부를 반환합니다.
};

export default ChessBoard;
