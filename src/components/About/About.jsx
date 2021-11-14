import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./about.css";
import { Link } from "react-router-dom";


function About() {
    useEffect(() => {
        fetchCountries()
    }, [])
    const [countries, setCountries] = useState([])
    const [searchName, setSearchName] = useState('') 

    const fetchCountries = () => {
        axios.get("https://corona-api.com/countries")
            .then((response) => {
                const countries_data = response.data.data
                setCountries(countries_data)
            })
            .catch((error) => {
                console.log(error)
            })
    }  

    return (
        <div>
            <h1>About Coronavirus</h1>
            <h2>Our Countries</h2>
            <div className = "country_search">
                <input className = "country_search-input" type="search" placeholder = "Search..." onChange = {(event) => setSearchName(event.target.value)} />
            </div>
            <div>
            {
                countries.filter((value) => {
                    if(searchName == ""){
                        return value.name
                    } else if(value.name.toLowerCase().includes(searchName.toLowerCase())) {
                        return value.name
                    }
                }).map((item) => (
                    <div className="country_list" key={item.code}>
                        <Link className = "contry_list-link" to = {`/country/${item.name}`} >{item.name}</Link>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default About


