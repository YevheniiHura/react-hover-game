import React, { useState, useEffect } from 'react';
import { GameField } from './components/GameField';
import { HoverSquaresField } from './components/HoverSquaresField';

const fetchModes = (setModes) => {
  fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
    .then(response => response.json())
    .then(data => setModes(data))
    .catch(error => console.error('Error fetching modes:', error));
};

export const App = () => {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [hoverSquares, setHoverSquares] = useState([]);

  useEffect(() => {
    fetchModes(setModes);
  }, []);

  useEffect(() => {
    setIsGameStarted(false);
    setHoverSquares([]);
  }, [selectedMode]);

  const handleModeChange = (selectedId) => {
    const mode = modes.find(mode => mode.id === selectedId);
  
    if (mode) {
      setSelectedMode(mode);
      setIsGameStarted(false);
      setHoverSquares([]);
    }
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  const handleSquareHover = (row, col, isBlue) => {
    if (isGameStarted) {
      if (isBlue) {
        setHoverSquares(prevSquares => [...prevSquares, { row, col }]);
      } else {
        setHoverSquares(prevSquares =>
          prevSquares.filter(square => square.row !== row || square.col !== col)
        );
      }
    }
  };

  return (
    <div>
      <div>
        <select 
          onChange={(e) => handleModeChange(e.target.value)}
          className='game__select'
        >
          <option value="">Select Mode</option>
          {modes.map(mode => (
            <option 
              key={mode.id} 
              value={mode.id}
            >
              {mode.name}
            </option>
          ))}
        </select>

        <button 
          onClick={handleStartGame}
          disabled={!selectedMode}
          className='game__button'
        >
          START
        </button>
      </div>
      {isGameStarted && selectedMode ? (
        <>
          <GameField 
            selectedMode={selectedMode}
            onSquareHover={handleSquareHover}
            />
            
          <HoverSquaresField hoverSquares={hoverSquares} />
        </>
      ) : (
        <p>Select game mode to start</p>
      )}
    </div>
  );
};

