import React from 'react';
import classnames from 'classnames';

const Hour = ({
	data, 
	statusTurns,
	boxes,
	onActionHour
}) => {
	let isWarning = false;
	let isDanger = false;
	let isSelected = false;
	let isFull = false;

	const idHour = data.id_d+"-"+data.id_h;

	const warning = statusTurns.map(function(turn){
		const id = turn.split("&");

		if(id[0] == idHour && id[1] == boxes){
			isFull = true;
		}

		if(id[0] == idHour && id[1] == boxes-1){
			isDanger = true;
		}

		if(id[0] == idHour && id[1] >= boxes * 0.5 && id[1] != boxes){
			isWarning = true;
		}

		if(data.class === "selected"){
			isSelected = true;
			isWarning = false;
			isDanger = false;
		}
		
	});

	const classes = classnames({
		"hours": true,
		"selected": isSelected,
		"warning": isWarning,
		"danger": isDanger
	});

	const hour = !isFull
		? (<div className={ classes } 
				onClick={ ( day, hour, selected ) => onActionHour(data.id_d, data.id_h, data.class )}> 
				{ data.value } 
		   </div>)
		: null	

	return hour;
}

export default Hour;
