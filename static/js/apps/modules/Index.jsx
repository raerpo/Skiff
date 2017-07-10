import React from 'react';
import NavBarIndex from './NavBarIndex';

class Index extends React.Component {
    render(){
        return (
            <div>
             <NavBarIndex />
                { this.props.children }
            </div>
        )
    }
}

export default Index;
