import React from 'react';
import serviceList from './serviceList';
import ExtraServices from './extraServices';

export default props => {
    const services = serviceList.map((item, index) => {
        return <ExtraServices key = {index} about = {item}/>
    });

    return (
        <div className ="extraServices">{services}</div>
    )
}
