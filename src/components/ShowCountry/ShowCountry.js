import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowCountry2 from '../ShowCountry2/ShowCountry2';
import'./ShowCountry.css';

const ShowCountry = () => {
    const [countries,setCountries] = useState([]); /* api ta ekta array ar usestate default value dite hoi so initial value of array is empty array number er default value 0 */

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data));
    },[])

    
       
    
    return (
        <div>
            <h1>Country Number : {countries.length}</h1>
        <div className='show-country-container'>
        {
            countries.map(showcountry2 => <ShowCountry2 
                showcountry2={showcountry2}
            key={showcountry2.cca3}/* setting key for react to find out the the element dynamically with key */
                 ></ShowCountry2>)
        }
        </div>
        </div>
    );
};

export default ShowCountry;