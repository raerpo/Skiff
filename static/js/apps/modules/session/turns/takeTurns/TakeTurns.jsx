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

function getAllturns(){
    return $.getJSON('/turns/frsdkff2apod9983');
}

function filterForTakenTurns(data, taken){
    const id = `${data.id_d}-${data.id_h}`;

    for(var i = 0; i < taken.length; i++){
        if(id == `${taken[i].day_id}-${taken[i].hour_id}`){
            return false;
        }
    };
    return true;
}

function hoursEquals(number, turns){
    return turns.filter(turn => turn.day_id+"-"+turn.hour_id === number).length;
}

function countTurns(turns) {
    var turnsEquals = [];
    console.log(turns)

    for(var i = 0; i < turns.length; i++){
        turnsEquals.push(
            turns[i].day_id+"-"+turns[i].hour_id + "&" +hoursEquals(turns[i].day_id+"-"+turns[i].hour_id, turns
        ));
    }
    return turnsEquals;
}

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
}


class TakeTurns extends React.Component {
 constructor(props){
  super(props);

  this.state = {
      elements : [],
            takenTurns: [],
            selectedTurns : [],
            allTurns: [],
            boxes: 0
     }
        this.onActionHour = this.onActionHour.bind(this);
    }

  componentWillMount(){
    getDataTurns().then(data => this.setState({ elements : data }));
    getTurnMarket().then(data => this.setState({ takenTurns : data }));
    getBoxes().then(boxes => this.setState({ boxes }));
    getAllturns().then(turn => this.setState({ allTurns : turn }));
 }

    sendDataDB(data){
        alert('turnos tomados correctamente');
        $.post('/turns/take/validate', { data });
        window.location.href = '/worker/turns/view';
    }

    onActionHour(day, hour, selected){
        const id = `${day}-${hour}`;

        if(selected === "noSelected"){
             this.setState({
                selectedTurns: this.state.selectedTurns
                .concat({
                    day, hour
                })
            });
        }else{
            const selectedTurns = this.state.selectedTurns
                .filter(data => `${data.day}-${data.hour}` != id);
            this.setState({ selectedTurns });
        }
    }

    render(){

        const countAllTurns = countTurns(this.state.allTurns);

        return (
        <div>
            <h2 className="title-take-turns">Turnos disponibles</h2>
         <div className="content-take-turns listDays">
                <Elements
                rawData={this.state.elements}
                data={ generateSendDAta(this.state) }
                statusTurns={countAllTurns}
                onActionHour={this.onActionHour}
                boxes={this.state.boxes} />
                <input className="btn btn-success send-turns" onClick={ (i) => this.sendDataDB(this.state.selectedTurns) } type="button" value="Tomar turnos" />
         </div>
            <Footer typeFooter={"2"} />
        </div>
        )
    }
};

export default TakeTurns;
