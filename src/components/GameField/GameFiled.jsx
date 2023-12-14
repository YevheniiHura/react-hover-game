import React from 'react';
import { Square } from '../Square';

export const GameField = ({ selectedMode, onSquareHover }) => {
  const gameFieldParams = Array.from({ length: selectedMode.field });

  return (
    <div>
      <h1>React Hover Game</h1>
      <div className="game-board">
        {gameFieldParams.map((_, row) => (
          <div 
            key={`row-${row}`}
            className="game-row"
          >
            {gameFieldParams.map((_, col) => (
              <Square 
                onSquareHover={onSquareHover}
                key={`${row}-${col}`}
                row={row}
                col={col} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};