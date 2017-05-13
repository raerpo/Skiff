import React from 'react';

function getData(){
    return $.get('/data/market/dfg43g3gfdg42fyy');
}

const Market = ({ comune, country, rutAdmin, totalBoxes, type }) => (
    <div>
        <h2>{type}</h2>
        <div>{rutAdmin}</div>
        <div>{comune}</div>
        <div>{country}</div>
        <div>{totalBoxes}</div>
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
            rutAdmin={data.rutAdmin}
            comune={data.comune}
            country={data.country}
            totalBoxes={data.totalBoxes}
            key={index} />
        );

        return(
            <div>{market}</div>
        )
    }

}

export default ViewMarket;