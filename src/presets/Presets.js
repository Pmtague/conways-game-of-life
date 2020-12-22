import React from 'react';

import Preset from './Preset';

import './Presets.css';

const Presets = props => {
	return (
		<div>
			<p className='presets-heading main-item-7'>Presets</p>
			<div className='presets main-item-4'>
				<Preset />
				<Preset />
				<Preset />
				<Preset />
			</div>
		</div>
	)
}

export default Presets;