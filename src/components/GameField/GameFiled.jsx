import React from 'react';
import { Square } from '../Square/Square';

export const GameField = ({ selectedMode, onSquareHover }) => {
  return (
    <div>
      <h1>React Hover Game</h1>
      <div className="game-board">
        {Array.from({ length: selectedMode.field }).map((_, row) => (
          <div 
            key={`row-${row}`}
            className="game-row"
          >
            {Array.from({ length: selectedMode.field }).map((_, col) => (
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