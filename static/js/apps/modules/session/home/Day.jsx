import React from 'react';

class Day extends React.Component {
	render(){

		if(this.props.day == this.props.number){
			return <div className="day-calendary selected-day"><div className="text-day"> { this.props.number } </div></div>
		}

		return <div className="day-calendary"><div className="text-day"> { this.props.number } </div></div>
	}
}

export default Day;