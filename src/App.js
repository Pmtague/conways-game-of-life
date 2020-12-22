import React, { useState } from 'react';

import Navigation from './navigation/Navigation';
import Gameboard from './game_board/Gameboard';
import GameControls from './game_controls/GameControls';
import Rules from './game_rules/Rules';
import Presets from './presets/Presets';
import Generations from './generations/Generations';

import './App.css';

function App() {

  const [generations, setGenerations] = useState(0)
	const [gridState, setGridState] = useState(() => {
		let gameGrid = Array(25).fill().map(square => Array(25).fill(false))
		return gameGrid
	})
	
  console.log("State", gridState)
  
  return (
    <div className="App">
      <Navigation />
      <Generations gridState={ gridState } setGridState={ setGridState }/>
      <Gameboard gridState={ gridState } setGridState={ setGridState }/>
      <GameControls gridState={ gridState } setGridState={ setGridState }/>
      <Presets gridState={ gridState } setGridState={ setGridState }/>
      <Rules />
    </div>
  );
}

export default App;
