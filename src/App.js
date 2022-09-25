import logo from './logo.svg';
import './App.css';
import './components/ShowCountry/ShowCountry.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowCountry from './components/ShowCountry/ShowCountry';

function App() {
  return (
    <div className="App">
     <ShowCountry></ShowCountry> 
     
    </div>
  );
}

  /* function LoadCountries(){
  const [countries,setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => setCountries(data));
  },[])

  return(
    
     <div>
      <h1>visiting every country of the world</h1>
      <h2>Number of Countries : {countries.length} </h2>
      {
        countries.map(country=> <ShowCountry name={country.name.common} capital={country.capital} population={country.population}></ShowCountry>)
      }
    </div> 
  )
} */

/* function ShowCountry (props){
  return(
    <div className='Country-details'>
       <h3>Country Details</h3>
       <h4>Name: {props.name}</h4>
       <h4>Capital: {props.capital}</h4>
        <h4>Population:{props.population}</h4>
    </div>
  )
} */














//counter function to increase
 //{ <Counter></Counter> } calling the component into the function named app 

/* function Counter() {
  const [count,setCount] =useState(0);
  const increaseCount = ()=> setCount(count+1);

  const [decCount,setdecCount] = useState(100);
  const disSetDecCount = () => setdecCount(decCount-1);

  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>click to increase</button>
    <h1>Decrease Count: {decCount}</h1>
      <button onClick={disSetDecCount}>Click to decrease</button>
    </div> 
    
      
    
  )
}*/

export default App;
