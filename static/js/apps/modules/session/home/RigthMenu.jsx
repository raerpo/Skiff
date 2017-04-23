import React from 'react';
import AsideTop from './AsideTop';
import AsideBottom from './AsideBottom';

class RigthMenu extends React.Component {
	render(){
		return (
			<div className="asidePers">
				<AsideTop />
				<AsideBottom />
			</div>
		)
	}
}

export default RigthMenu;