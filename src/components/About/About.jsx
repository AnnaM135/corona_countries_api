import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./about.css";


function About() {
    useEffect(() => {
        fetchCountries()
    }, [])
    const [countries, setCountries] = useState([])

    const fetchCountries = () => {
        axios.get("https://corona-api.com/countries")
            .then((response) => {
                const countries_data = response.data.data
                setCountries(countries_data)
            })
       
           
    }
    return (
        <div>
            <h1>About Coronavirus</h1>
            <div className = "country_search">
                <input className = "country_search-input" type="search" placeholder = "Search..." />
            </div>
            {
                countries.map((item) => (
                    <div className="country-list" key={item.code} >{item.name}</div>
                ))
            }
        </div>
    )
}

export default About


