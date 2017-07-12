import React from 'react';
import Footer from '../../Footer';

function getData(){
    return $.get('/data/market/dfg43g3gfdg42fyy');
}

const Work = ({ comune, country, rutAdmin, places, type, address }) => (
    <div className="box-market">
        <h2 className="header-market">{type}</h2>
        <div><span className="primaryText">Dirección</span>: {address}</div>
        <div><span className="primaryText">Rut</span>: {rutAdmin}</div>
        <div><span className="primaryText">Comuna</span>: {comune}</div>
        <div><span className="primaryText">País</span>: {country}</div>
        <div><span className="primaryText">Número de puestos</span>: {places}</div>
    </div>
)

class ViewWork extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            informationMarket: {
                market: []
            }
        }
    }

    componentDidMount(){
        this.hydrateState();
    }

    hydrateState(){
        const initialState = getData().then(data => this.setState({informationMarket: { market : data }}));
    }

    render(){
        const work = this.state.informationMarket.market.map((data, index) =>
            <Work
            type={data.type}
            rutAdmin={data.admin_rut}
            address={data.address}
            comune={data.comune}
            country={data.country}
            places={data.totalPlaces}
            key={index} />
        );

        return(
            <div>
                <div className="content-work">
                    {work}
                </div>
                <Footer typeFooter={"1"}/>
            </div>
        )
    }

}

export default ViewWork;
