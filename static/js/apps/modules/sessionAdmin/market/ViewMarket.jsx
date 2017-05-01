import React from 'react';

function getData(){
    const data = $.get('/data/market/dfg43g3gfdg42fyy');

    console.log(data);
    return data;
}

const ViewMarket = () => {
    getData();
    return(
        <div>market</div>
    )

}

export default ViewMarket;