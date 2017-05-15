import React from 'react';
import classnames from 'classnames';

class Hour extends React.Component {
	render(){

		const classes = classnames({
			"hours": true,
			"noSelected": this.props.data.class === "noSelected",
			"selected": this.props.data.class === "selected",
			"warning": false
		});

		// console.log(classes);

		const hour = this.props.data.class === "selected" 
			? <div className={ classes } onClick={ ( day, hour ) => this.props.unSelectElement(this.props.data.id_d, this.props.data.id_h )}> { this.props.data.value } </div>
			: <div className={ classes } onClick={ ( day, hour ) => this.props.getInfo(this.props.data.id_d, this.props.data.id_h )}> { this.props.data.value } </div>	

		return hour;
	}
};

export default Hour;
