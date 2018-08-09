import React from 'react'

export default props => {
    console.log('extra services ', props);

    const {id, item} = props.about;

    return <div className = "items" id={id} item = {item}/>
    
}
