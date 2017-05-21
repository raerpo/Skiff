import React from 'react';
import Hour from './Hour';

class Day extends React.Component {

    render(){
    	const hours = this.props.data
    		.filter(data => data.id_d == this.props.position)
    		.map((data, index) => 
			(
				<Hour key={`hour${index}`} 
				getInfo={ this.props.getInfo } 
				unSelectElement={ this.props.unSelectElement } 
				data={data} 
				statusTurns={this.props.statusTurns} 
				boxes={this.props.boxes} />)
			);	

    	return (
        	<div>
	        	<div className="panel panel-default">
				    <div className="panel-heading">
				      	<h4 className="panel-title">
				        	<a data-toggle="collapse" data-parent="#accordion" href={`#${this.props.collapse}`} > { this.props.name } </a>
				     	 </h4>
				    </div>
			    </div>
			    <div id={this.props.collapse} className="panel-collapse collapse in">
			    	<div className="panel-body">
			    		{ hours }
			    	</div>
			    </div>
			</div>
	    )
    		
    }
    
}

export default Day;