import React from 'react';
import Footer from '../Footer';
import NoAvailable from '../NoAvailable';

class Contact extends React.Component {
	render(){
		return (
			<div>
				<h1 className="test">Contactanos</h1>
				<Footer 
				typeFooter={'1'} />
			</div>
		)
	}
}

export default Contact;