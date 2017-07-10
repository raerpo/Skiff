import React from 'react';
import Worked from './Worked'

function getData(){
 return $.getJSON('/data/cxcdjewikkd2k34kk56kkfssh');
}

class SectionMain extends React.Component {

 constructor(props){
  super(props)

  this.state = {
   worked : []
  }

 }

 componentWillMount(){
  getData().then(data => this.setState({ worked : data.results}));
 }

 render(){

  const workeds = this.state.worked.length > 0
   ? this.state.worked.map((data, index) => <Worked key={`worked_${index}`} data={data}/>)
   : (<div className="content-sleep"><img src={this.props.url}/></div>)

  return (
   <div className="sectionPers">
    <h3 className="h3-home">Trabajadores de turno</h3>
    <div className="row-worked-head">
     <div>Nombre</div>
     <div>Apellido</div>
     <div>Horario</div>
    </div>
    { workeds }
   </div>
  )
 }
}

export default SectionMain;
