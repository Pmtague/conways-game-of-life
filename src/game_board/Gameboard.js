import React from 'react';

import Cell from './Cell';

import './Gameboard.css';

const Gameboard = props => {
	
	return (
		<div className="game-grid main-item-2">
			{props.gridState.map(function(row, rowIndex) {
				return row.map(function(cell, colIndex) {
					return <Cell 
						key={ `${rowIndex}-${colIndex}` } 
						gridState={ props.gridState } 
						setGridState={ props.setGridState }
						rowIndex={ rowIndex }
						colIndex={ colIndex }/>
			})})}
		</div>
	)
}

export default Gameboard;