import React from 'react';

import './Rules.css'

import Rule from './Rule';

const Rules = () => {
	return (
		<div>
			<p className='rules-heading main-item-8'>How It Works</p>
			<div className='game-rules main-item-5'>
				<Rule text='Select a grouping of cells or choose a preset pattern.'/>
				<Rule text='Press play to start the game.'/>
				<Rule text='If the cell is alive and has 2 or 3 neighbors, the cell remains alive. Otherwise it dies.'/>
				<Rule text='If the cell is dead and has exactly 3 neighbors, the cell comes alive. Otherwise it remains dead.'/>
			</div>
		</div>
	)
}

export default Rules