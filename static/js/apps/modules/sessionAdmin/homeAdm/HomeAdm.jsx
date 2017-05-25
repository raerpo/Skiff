import React from 'react';
import SectionMain from '../../session/home/SectionMain';
import RigthMenu from '../../session/home/RigthMenu';
import Footer from '../../Footer';

const HomeAdm = () => (
    <div>
        	<div className="home">
              <SectionMain
              url={"../static/images/sleep_cat2.gif"} />
              <RigthMenu />
        	</div>
              <Footer typeFooter={'2'} />
    </div>
);

export default HomeAdm;
