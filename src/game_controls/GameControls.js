import React from 'react';

import Button from './Button';

import './GameControls.css';

const GameControls = props => {
	return (
		<div className='game-controls main-item-3'>
			<Button className='start-button' text='Start'/>
			<Button className='pause-button' text='Pause'/>
			<Button className='stop-button' text='Stop'/>
		</div>
	)
}

export default GameControls;