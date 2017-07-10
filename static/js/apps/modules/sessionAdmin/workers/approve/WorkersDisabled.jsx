import React from 'react';

class WorkersDisabled extends React.Component {
    render(){
        return (
         <div className="row-workerDisabled">
          <div><div>{ this.props.data.rut }</div></div>
          <div><div>{ this.props.data.name }</div></div>
          <div><div>{ this.props.data.lastName }</div></div>
          <div><div>{ this.props.data.phone }</div></div>
          <div>
           <div>
            <button className="btn btn-success" onClick={(i) => this.props.approve(this.props.position)}><span className="glyphicon glyphicon-ok" /></button>
            <button className="btn btn-danger" onClick={(i) => this.props.remove(this.props.position)}><span className="glyphicon glyphicon-remove" /></button>
           </div>
          </div>
         </div>
        )
    }
}

export default WorkersDisabled;
