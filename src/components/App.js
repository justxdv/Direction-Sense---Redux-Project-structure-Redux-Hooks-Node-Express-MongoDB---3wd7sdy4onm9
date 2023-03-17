import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onNorth, onEast, onSouth, onWest } from '../actions';
import '../styles/App.css';

const App = () => {
  const direction = useSelector((state) => state.tellDirection);
  const dispatch = useDispatch();

  const handleNorthClick = () => {
    dispatch(onNorth());
  };

  const handleEastClick = () => {
    dispatch(onEast());
  };

  const handleSouthClick = () => {
    dispatch(onSouth());
  };

  const handleWestClick = () => {
    dispatch(onWest());
  };

  return (
    <div id="main">
      <h1>Direction Sense</h1>
      <div className="styles">
        <button onClick={handleNorthClick} id="north">
          N
        </button>
      </div>
      <button onClick={handleWestClick} id="west">
        W
      </button>
      <input id="input" value={direction} />
      <button onClick={handleEastClick} id="east">
        E
      </button>
      <br />
      <div className="styles">
        <button onClick={handleSouthClick} id="south">
          S
        </button>
      </div>
    </div>
  );
};

export default App;
