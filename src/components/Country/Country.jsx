import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {

    const {name, flags, area, population, cca2} = country;
    

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {

        setVisited(!visited);

    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>

            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code: {cca2}</p>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Visited Country flag</button> <br />
            <button onClick={() => handleVisitedCountry(country)}>Visited Country</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I\'ve this country' : 'Willing to go.'}
            
        </div>
    );
};

export default Country;