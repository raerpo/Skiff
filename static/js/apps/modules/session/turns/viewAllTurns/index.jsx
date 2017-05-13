import React, {Component} from 'react';

function getData(){
    return $.getJSON('/data/turns/k82rjhsd8883kfdsss');
}

const Turn = ({ name, nameDay, lastName, value }) => (
    <div>
        <div>{name}</div>
        <div>{lastName}</div>
        <div>{nameDay}</div>
        <div>{value}</div>
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
        <div>
            <div>{turns}</div>
        </div>
        )
    }

}

export default viewAllTurns;