import React from 'react';
import InfoTurn from './InfoTurn';

function getMyTurns(){
	return $.getJSON('/data/jj8dd1scsa82jsass224');
}

class ViewTurns extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			elements: []
		}

	}

	componentWillMount(){
		getMyTurns().then(data => this.setState({ elements : data }));
	}

    render(){

    	const turn = this.state.elements
    		.map((data, index) => <InfoTurn key={`element${index}`} data={data} />);

        return (
        	<div className="content-info-turns">          
                <div className="content-view-turns-head">
                    <div className="view-turns-head">Día</div>
                    <div className="view-turns-head">Hora</div>
                </div>                  
    			    { turn }
    		</div>
        )
    }
}

export default ViewTurns;