import React from 'react';
import'./ShowCountry2.css';

const ShowCountry2 = (props) => {
    const{area,population,name,flags} =props.showcountry2;
    return (
        <div className='showcountry2'>
            <h3>Country Name:{name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <h5>Area: {area}</h5>
        </div>
    );
};

export default ShowCountry2;