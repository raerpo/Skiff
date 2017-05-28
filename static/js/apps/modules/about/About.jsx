import React from 'react';
import Footer from '../Footer';
import NoAvailable from '../NoAvailable';

class About extends React.Component {
	render(){
		const jp = 1;
		return (
			<div>
				<div className="container">
					<h3 className="titles">Quiénes Somos</h3>
					<p className="paragraph">Lorem ipsum dolor sit amet, consectetur
					 adipiscing elit. Vestibulum non ipsum sed 
					 sem sodales consequat a ac nunc. Quisque 
					 sit amet elit neque. Pellentesque enim dui, 
					 fringilla vel viverra eget, mollis in felis. 
					 Maecenas eleifend fringilla ex, nec ultrices 
					 odio tristique vitae. Nullam enim eros, finibus 
					 et volutpat cursus, facilisis eleifend erat.</p>
					<hr />
					<h3 className="titles">Nuestra Misión</h3>
					<p className="paragraph">Lorem ipsum dolor sit amet, consectetur
					 adipiscing elit. Vestibulum non ipsum sed 
					 sem sodales consequat a ac nunc. Quisque 
					 sit amet elit neque. Pellentesque enim dui, 
					 fringilla vel viverra eget, mollis in felis. 
					 Maecenas eleifend fringilla ex, nec ultrices 
					 odio tristique vitae. Nullam enim eros, finibus 
					 et volutpat cursus, facilisis eleifend erat.</p>
					<hr />
					<h3 className="titles">Nuestra Visión</h3>
					<p className="paragraph">Lorem ipsum dolor sit amet, consectetur
					 adipiscing elit. Vestibulum non ipsum sed 
					 sem sodales consequat a ac nunc. Quisque 
					 sit amet elit neque. Pellentesque enim dui, 
					 fringilla vel viverra eget, mollis in felis. 
					 Maecenas eleifend fringilla ex, nec ultrices 
					 odio tristique vitae. Nullam enim eros, finibus 
					 et volutpat cursus, facilisis eleifend erat.</p>
					<hr />
					</div>
				<Footer 
					typeFooter={'1'}
				/>
			</div>
		)	

	}
}

export default About;

