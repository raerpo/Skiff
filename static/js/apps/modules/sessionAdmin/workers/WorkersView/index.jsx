import React, {Component} from 'react';

function getData(){
	return $.getJSON("/data/workers/j563238k9jkggfff4g");
}

const Worker = ({ rut, name, lastName, email, phone }) => (
    <div>
        <div>{rut}</div>        
        <div>{name}</div>
        <div>{lastName}</div>
        <div>{email}</div>
        <div>{phone}</div>        
    </div>
)

class WorkersView extends Component {

    constructor(props){
        super(props)

        this.state = {
            workers : []
        }
    }

    componentDidMount(){
        this.hydrateState();
    }

    hydrateState(){
        const initialState = getData().then(data => this.setState({ workers: data }));
    }

    render(){

        const workers = this.state.workers.map((worker, index) => 
            <Worker 
                rut={worker.rut}
                name={worker.name}
                lastName={worker.lastName}
                email={worker.email}
                phone={worker.phone}
                key={index} 
            />
        );

        return <div>{workers}</div>
    }
};

export default WorkersView;