import React, { useState } from 'react';
import classnames from 'classnames';

export const Square = ({ row, col, onSquareHover }) => {
  const [isBlue, setIsBlue] = useState(false);

  const handleMouseEnter = () => {
    setIsBlue(prevIsBlue => !prevIsBlue);
    onSquareHover(row, col, !isBlue);
  };

  return (
    <div
      className={classnames('square', { 'blue': isBlue, 'white': !isBlue })}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
};
