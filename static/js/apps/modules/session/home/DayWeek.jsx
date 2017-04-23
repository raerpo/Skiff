import React from 'react';

class Day extends React.Component {
	render(){
		return <div className="day-week"><div className="text-day-week"> {this.props.info} </div></div>
	}
}

export default Day;