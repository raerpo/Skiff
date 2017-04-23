import React from 'react';

class Hour extends React.Component {
	render(){
		if(this.props.data.class === "selected"){
			return <div className={`hours ${this.props.data.class}`} onClick={ (day, hour) => this.props.unSelectElement(this.props.data.id_d, this.props.data.id_h) }> { this.props.data.value } </div>
		}
		return <div className={`hours ${this.props.data.class}`} onClick={ (day, hour) => this.props.getInfo(this.props.data.id_d, this.props.data.id_h) }> { this.props.data.value } </div>	
	}
}

export default Hour;
