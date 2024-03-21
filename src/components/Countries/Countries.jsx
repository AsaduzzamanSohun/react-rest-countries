import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])


    function handleVisitedCountry(country) {

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }

    const handleVisitedFlag = flag => {

        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }

    return (
        <div>

            <h3>Countries: {countries.length}</h3>

            <h4>My visited countries list</h4>
            <ul>

                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }


            </ul>

            <div className="flag-container">



                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }



            </div>

            <div className="countries-container">

                {

                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedFlag={handleVisitedFlag}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)

                }

            </div>


        </div>
    );
};

export default Countries;