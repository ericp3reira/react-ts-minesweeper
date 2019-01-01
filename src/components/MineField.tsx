import React from 'react';
import MineSquare from './MineSquare';

export const MineField = (props: MineFieldProps) => {
  const { game, onLeftClick } = props;
  
  const board = game.state.map((row, i) => (
    <div key={i} className="board-row">
      {
        row.map((field, j) => (
          <MineSquare
            key={`${i}-${j}`}
            index={j + row.length}
            field={field}
            onLeftClick={field => onLeftClick(field)}
          />
        ));
      }
    </div>
  ));

  return (
    <div className="game-board">
      {board}
    </div>
  );
};

export interface MineFieldProps {
  game: Game;
  onLeftClick: (field: Mine) => void;
}