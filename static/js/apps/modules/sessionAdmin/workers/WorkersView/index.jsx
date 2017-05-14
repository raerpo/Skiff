import React, {Component} from 'react';

function getData(){
	return $.getJSON("/data/workers/j563238k9jkggfff4g");
}

const Worker = ({ rut, name, lastName, email, phone }) => (
    <div className="content-worker">
        <h2 className="titleWorker">{name} {lastName}</h2>
        <div><span className="primaryText">Rut</span> : {rut}</div>        
        <div><span className="primaryText">Email</span> : {email}</div>
        <div><span className="primaryText">Teléfono</span> : {phone}</div>        
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

        return (
            <div className="content-viewWorkers">
                <h3 className="h3-admin">Todos mis trabajadores</h3>
                {workers}
            </div>
        )
    }
};

export default WorkersView;