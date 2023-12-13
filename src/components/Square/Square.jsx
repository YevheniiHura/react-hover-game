import React, { useState } from 'react';

export const Square = ({ row, col, onSquareHover }) => {
  const [isBlue, setIsBlue] = useState(false);

  const handleMouseEnter = () => {
    setIsBlue(prevIsBlue => !prevIsBlue);
    onSquareHover(row, col, !isBlue);
  };

  return (
    <div
      className={`square ${isBlue ? 'blue' : 'white'}`}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
};
