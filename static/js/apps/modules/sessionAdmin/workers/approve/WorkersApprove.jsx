import React from 'react';
import WorkersDisabled from './WorkersDisabled';
import Footer from '../../../Footer';

function getData(){
	return $.getJSON("/data/user/jdqwerdfisllediifkwuyh")
}

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

		const workersDisabled = this.state.WorkersDis
				.map((data, index) => 
					<WorkersDisabled key={`worker${index}`} data={data} position={index} approve={this.approve} remove={this.remove}/>
				);

		return (
			<div className="content">
				{workersDisabled}
				<Footer classNames={'footer_type_1'} />
			</div>
		)
	}
}

export default WorkersApprove;