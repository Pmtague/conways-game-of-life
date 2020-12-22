import React from 'react';
import produce from 'immer';

import './Cell.css'

const Cell = (props) => {
	
	// Uses immer's produce method to create a new copy of the state with the updated value
	const clickHandler = () => {
		const newGridState = produce(props.gridState, gridCopy => {
			gridCopy[props.rowIndex][props.colIndex] = props.gridState[props.rowIndex][props.colIndex] ? false : true
		})
		props.setGridState(newGridState)
	}

	return (
		<div 
			// Conditional classname to control cell styling based on current state
			className={`grid-item${props.gridState[props.rowIndex][props.colIndex] === true ? "-selected" : ""}`} 
			onClick={ clickHandler }
		></div>
	)
}

export default Cell;