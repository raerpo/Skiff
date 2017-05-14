import React from 'react';
import WorkersDisabled from './WorkersDisabled';
import Footer from '../../../Footer';

function getData(){
	return $.getJSON("/data/user/jdqwerdfisllediifkwuyh")
}

const NoWorkers = () => (
	<div className="noWorkers-content">
		<div className="noWorkers-text">No hay trabajadores pendientes</div>
	</div>
)

class WorkersApprove extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			WorkersDis : []
		}

		this.approve = this.approve.bind(this);
		this.remove = this.remove.bind(this);		
	}

	approve(position){
		const add = this.state.WorkersDis[position];
		$.post('/admin/workers/add', { data : add });
	}

	remove(position){
		var option = confirm("¿Esta seguro que desea elimnar a este usuario?");
		if(option == true){

			var workers = this.state.WorkersDis;
			var deleted = workers[position];
			workers.splice(position, 1);
			this.setState({
				WorkersDis : workers
			});

			$.post('/admin/workers/remove', { data : deleted })
		}
		
	}

	componentWillMount(){
		getData().then(data => this.setState({ WorkersDis : data }));
	}

	render(){
		const workers = this.state.WorkersDis

		const workersDisabled = 
		workers.length > 0 
		? workers.map((data, index) => (
			<WorkersDisabled 
			key={`worker${index}`} 
			data={data} 
			position={index} 
			approve={this.approve} 
			remove={this.remove}/>)) 
		: <NoWorkers />;

		const title = workers.length ? <h3 className="h3-admin">Trabajadores pendientes</h3> : null;
		
		return (
			<div className="content">
				{workersDisabled}
				<Footer typeFooter={'1'} />
			</div>
		)
	}
}

export default WorkersApprove;