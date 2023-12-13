import React from 'react';

export const HoverSquaresField = ({ hoverSquares }) => {
  return (
    <div>
      <h2>Hover Squares Field</h2>

      {hoverSquares.length > 0 ? (
        <div className="hover-squares-board">
          {hoverSquares.map(square => (
            <div 
              key={`${square.row}-${square.col}`}
              className="hover-square"
            >
              {`row ${square.row + 1} col ${square.col + 1}`}
            </div>
          ))}
        </div>
      ) : (
        <p>No squares hovered yet</p>
      )}
    </div>
  );
};