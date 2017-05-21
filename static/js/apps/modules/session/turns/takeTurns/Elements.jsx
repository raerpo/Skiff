import React from 'react';
import Day from './Day';

class Elements extends React.Component {

    render(){

    	const days = this.props.rawData
    		.filter(data => data.id_h == 0)
    		.map((data , index) =>
    			<Day key={`day${index}`} 
				getInfo={ this.props.getInfo } 
				unSelectElement={ this.props.unSelectElement } 
				position={index} data={this.props.data} 
				collapse={`collapse${index + 1}`} 
				name={data.name} 
				statusTurns={this.props.statusTurns} 
				boxes={this.props.boxes} />
    		)

        return <div className="panel-group" id="accordion">{ days }</div>
    }
}

export default Elements;