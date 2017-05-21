import React from 'react';
import classnames from 'classnames';

const Hour = ({
	data, 
	statusTurns,
	getInfo,
	unSelectElement,
	boxes
}) => {
	var isWarning = false;
	var isDanger = false;

	const idHour = data.id_d+"-"+data.id_h;

	const warning = statusTurns.map(function(turn){
		const id = turn.split("&");

		if(id[0] == idHour && id[1] >= boxes * 0.5 && id[1] != boxes){
			isWarning = true;
		}

		if(id[0] == idHour && id[1] == boxes){
			isDanger = true;
		}
		
	});

	const classes = classnames({
		"hours": true,
		"noSelected": data.class === "noSelected",
		"selected": data.class === "selected",
		"warning": isWarning,
		"danger": isDanger

	});

	const hour = data.class === "selected" 
		? <div className={ classes } onClick={ ( day, hour ) => unSelectElement(data.id_d, data.id_h )}> { data.value } </div>
		: <div className={ classes } onClick={ ( day, hour ) => getInfo(data.id_d, data.id_h )}> { data.value } </div>	

	return hour;

}

export default Hour;
