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

      let nameDay = null;
    	const turn = this.state.elements
    		.map((data, index) =>{
           let diference = nameDay === data.name ? null : (<hr key={`key-${index}`} />)
          nameDay = data.name;
           return(
             <div  key={index}>
                {diference}
                <InfoTurn
                  data={data} />
              </div>
            )
        }

        );

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
