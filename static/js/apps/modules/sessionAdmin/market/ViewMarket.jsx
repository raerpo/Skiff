import React from 'react';
import Footer from '../../Footer';

function getData(){
    return $.get('/data/market/dfg43g3gfdg42fyy');
}

const Market = ({ comune, country, rutAdmin, totalBoxes, type, address }) => (
    <div className="box-market">
        <h2 className="header-market">{type}</h2>
        <div><span className="primaryText">Dirección</span>: {address}</div>
        <div><span className="primaryText">Rut</span>: {rutAdmin}</div>
        <div><span className="primaryText">Comuna</span>: {comune}</div>
        <div><span className="primaryText">País</span>: {country}</div>
        <div><span className="primaryText">Número de cajas</span>: {totalBoxes}</div>
    </div>
)

class ViewMarket extends React.Component{

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
        const market = this.state.informationMarket.market.map((data, index) => 
            <Market 
            type={data.type}
            rutAdmin={data.rut_admin}
            address={data.address}
            comune={data.comune}
            country={data.country}
            totalBoxes={data.totalBoxes}
            key={index} />
        );

        return(
            <div>
                <div className="content-market">
                    {market}
                </div>
                <Footer typeFooter={"1"}/>
            </div>
        )
    }

}

export default ViewMarket;