import React from 'react';
import Elements from './Elements';
import Footer from '../../../Footer';

function getDataTurns(){
	return $.getJSON('/data/w9rie82jfns8fgd82ks');
};

function getTurnMarket(){
    return $.getJSON('/data/kdfkjg82s02kkd9337f');
};

function getBoxes(){
    return $.getJSON('/data/fvht3sd120980ksd881s');
}

function filterForTakenTurns(data, taken){
    const id = `${data.id_d}-${data.id_h}`;

    for(var i = 0; i < taken.length; i++){
        if(id == `${taken[i].id_day}-${taken[i].id_hour}`){
            return false;
        }
    };
    return true;
};

function addClassSelected(data, selected){
    const id = `${data.id_d}-${data.id_h}`;

    if(selected.length == 0){
        data.class = "noSelected";
        return data;
    }

    for(var i = 0; i < selected.length; i++){
        if( id == `${selected[i].day}-${selected[i].hour}`){
            data.class = "selected";
            return data;
        }
    }

    data.class = "noSelected";
    return data;
}

function generateSendDAta(data){
    const elements = data.elements;
    const takenTurns = data.takenTurns;
    const selectedTurns = data.selectedTurns;

    return elements
        .filter(data => filterForTakenTurns(data, takenTurns))
        .map(data => addClassSelected(data, selectedTurns));
};


class TakeTurns extends React.Component {

	constructor(props){
		super(props);

		this.state = {
    		elements : [],
            takenTurns: [],
            selectedTurns : [],
            boxes: 0 
	    };

        this.getInfoElement = this.getInfoElement.bind(this);
        this.unSelectElement = this.unSelectElement.bind(this);

    };	

	componentWillMount(){
		getDataTurns().then(data => this.setState({ elements : data }));
        getTurnMarket().then(data => this.setState({ takenTurns : data }));
        getBoxes().then(boxes => this.setState({ boxes }));
	};

    sendDataDB(data){
        alert('turnos tomados correctamente');
        $.post('/turns/take/validate', { data });
        window.location.href = '/turns/view';
    }

    getInfoElement(day , hour){
        this.setState({ 
            selectedTurns: this.state.selectedTurns
            .concat({ 
                day, hour
            })
        });
    };

    unSelectElement(day, hour){
        const id = `${day}-${hour}`;

        const selectedTurns = this.state.selectedTurns
            .filter(data => `${data.day}-${data.hour}` != id);

        this.setState({ selectedTurns });
    };

    render(){
        return (
        <div>
            <h2 className="title-take-turns">Turnos disponibles</h2>
        	<div className="content-take-turns listDays"> 
                <Elements getInfo={ this.getInfoElement } unSelectElement={ this.unSelectElement } rawData={this.state.elements} data={ generateSendDAta(this.state) } />
                <input className="btn btn-success send-turns" onClick={ (i) => this.sendDataDB(this.state.selectedTurns) } type="button" value="Tomar turnos" />
        	</div>	
            <Footer typeFooter={"2"} />
        </div>
        )
    }
};

export default TakeTurns;