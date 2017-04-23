import React from 'react';

class InfoTurn extends React.Component {
	render(){
		return (
			<div className="content-view-turns-body">
				<div className="view-turns-body">{this.props.data.name}</div>
				<div className="view-turns-body">{this.props.data.value}</div>
			</div>
		)
	}
}

export default InfoTurn;