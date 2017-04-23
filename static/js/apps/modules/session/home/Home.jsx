import React from 'react';
import SectionMain from './SectionMain';
import RigthMenu from './RigthMenu';
import Footer from '../../Footer';

class Home extends React.Component {
    render(){
        return (
            <div>
        	<div className="home">
        		<SectionMain />
        		<RigthMenu />
        	</div>
                <Footer 
				classNames={'footer_type_2'} />
            </div>
        )
    }
}

export default Home;