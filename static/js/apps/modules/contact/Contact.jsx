import React from 'react';
import Footer from '../Footer';
import NoAvailable from '../NoAvailable';

class Contact extends React.Component {
	render(){
		return (
			<div>
				<div className="content">
					<NoAvailable />
				</div>
				<Footer 
				classNames={'footer_type_1'} />
			</div>
		)
	}
}

export default Contact;