import React, {Component} from 'react';

function getData(){
    return $.getJSON('/data/turns/k82rjhsd8883kfdsss');
}

const Turn = ({ name, nameDay, lastName, value }) => (
    <div className="content-view-turns-body">
        <div className="view-turns-body">{name}</div>
        <div className="view-turns-body">{nameDay}</div>
        <div className="view-turns-body">{lastName}</div>
        <div className="view-turns-body">{value}</div>
    </div>
)

class viewAllTurns extends Component {
    constructor(props){
        super(props)

        this.state = {
            turns: []
        }
    }

    componentDidMount(){
        this.hydrateState();
    }

    hydrateState(){
        const initialState = getData().then(turn => this.setState({ turns: turn }));
    }

    render(){

        const turns = this.state.turns.map((turn, index) => 
            (
                <Turn 
                name={turn.name}
                lastName={turn.lastName}
                nameDay={turn.nameDay}
                value={turn.value} 
                key={index}/>
            )
        )

        return (
        <div className="content-info-turns">
            <div className="content-view-turns-head">
                <div className="view-turns-head">Trabajador</div>
                <div className="view-turns-head">Día/hora</div>
            </div>
           {turns}
        </div>
        )
    }

}

export default viewAllTurns;