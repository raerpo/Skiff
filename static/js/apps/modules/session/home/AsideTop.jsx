import React from 'react';
import Count from './Count';
var i = 0;

function getData(){
	return $.getJSON('/data/cxcdjewikkd2k34kk56kkfssh');
}

function count(){
	$('.asideRight').append(i);
	i = i + 1;
	setTimeout(count(),1000); 
}

class AsideTop extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			time : []
		}
	}

	componentWillMount(){
		getData().then(data => this.setState({ time: data.time }));
	}
	 


	render(){
		return (
			<div className="content-hour">
				<Count />
			</div>
		)
	}
}

export default AsideTop;