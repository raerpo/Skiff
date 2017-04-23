import React from 'react';

class Worked extends React.Component {
    render(){
        return (
      		<div className="row-worked">
      			<div>{ this.props.data.name }</div>
      			<div>{ this.props.data.lastName }</div>
      			<div>{ this.props.data.value }</div>
      		</div>
        )
    }
}

export default Worked;