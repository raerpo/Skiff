import React from 'react';
import Day from './Day';

const Elements = ({
	rawData,
	data, 
	onActionHour, 
	statusTurns, 
	boxes
}) => {
	const days = rawData
		.filter(element => element.id_h == 0)
		.map((day , index) =>
			<Day key={index} 
			position={index}
			data={data} 
			collapse={`collapse${index + 1}`} 
			name={day.name} 
			onActionHour={onActionHour}
			statusTurns={statusTurns} 
			boxes={boxes} />
		);

	return <div className="panel-group" id="accordion">{ days }</div>
}

export default Elements;