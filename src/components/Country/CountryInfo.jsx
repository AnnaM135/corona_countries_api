import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function CountryInfo() {
    const match = useParams()
    useEffect(function ()  {
         fetchCountry()
    }, [])
    
    const [country, setCountry] = useState({})

    const fetchCountry = () => {
        axios.get("https://corona-api.com/countries")
            .then((response) => {
                const data = response.data.data
                const find_data = data.find((item) => item.name === match.name)
                console.log(find_data)
                setCountry(find_data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
    return (
        <div>
            <h1>Country Name: {country.name}</h1>
            <h2>Country Code: {country.code}</h2>
            <h2>Country Population: {country.population}</h2>
            {/* <p>Today is confirmed: {country.today.confirmed}</p> */}
            {/* <p>Today is deaths: {country.today.deaths}</p> */}
            <p style = {{textDecoration: "underline"}}>This info update in ` {country.updated_at}</p>
        </div>
    )
}

export default CountryInfo
