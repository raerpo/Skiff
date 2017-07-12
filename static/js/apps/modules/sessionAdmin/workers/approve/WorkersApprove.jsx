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
  let workers = this.state.WorkersDis;
  let add = workers[position];
  workers.splice(position, 1);
  this.setState({
    WorkersDis : workers
  });

  $.post('/admin/workers/add', { data : add })
 }

 remove(position){
  let option = confirm("¿Esta seguro que desea elimnar a este usuario?");
  if(option == true){

    let workers = this.state.WorkersDis;
    let deleted = workers[position];
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
