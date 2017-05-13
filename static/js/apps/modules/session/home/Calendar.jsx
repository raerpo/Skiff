import React from 'react';
import Day from './Day';
import DayWeek from './DayWeek';

function getDay(){
	return $.get('/data/lokrsiidlldiiwesoodl');
}

class Calendar extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			day : null
		}
	}

	componentWillMount(){
		getDay().then(data => this.setState({ day : data.day }));
	}

	render(){

		const infoWeek = ['Lu','Ma','Mi','Ju','Vi', 'Sa', 'Do',];

		const infoDays = [
						null,null,null,1,2, 3, 4,
						5, 6, 7, 8,  10,  11,
						12,13,14,15,16,17,18,
						19,20,21,22,23,24,25,
						26,27,28,29,30,31,null,null
					];
			
		const numbers = infoDays
			.map((data, index) => <Day key={`day_${index}`} number={data} day={this.state.day} />)

		const dayWeek = infoWeek
			.map((data, index) => <DayWeek key={`dayWeek_${index}`} info={data} />)

		return(

			<div className="content-calendary">
				<div className="head-calendary">{ dayWeek }</div>
				<div className="body-calendary">{ numbers }</div>
			</div>
		)
	}
}
 
export default Calendar;