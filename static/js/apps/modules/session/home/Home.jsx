import React from 'react';
import SectionMain from './SectionMain';
import RigthMenu from './RigthMenu';
import Footer from '../../Footer';

class Home extends React.Component {
    render(){
        return (
            <div>
         <div className="home">
          <SectionMain
            url={"../static/images/sleep_cat2.gif"}/>
          <RigthMenu />
         </div>
                <Footer typeFooter={'1'} />
            </div>
        )
    }
}

export default Home;
