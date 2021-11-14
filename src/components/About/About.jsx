import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./about.css";
import { Link } from "react-router-dom";


function About() {
    useEffect(() => {
        fetchCountries()
        searchCountry()
    }, [])
    const [countries, setCountries] = useState([])
    const [search_name, setSearch] = useState({name: "a"}) 

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

    const change = (e) => {
        const target = e.target
        setSearch(() => {
            return {
                ...search_name,
                [target.name]: target.value
            }
            
        })
    }
    
    const searchCountry = () => {
        console.log(search_name)
    }

    return (
        <div>
            <h1>About Coronavirus</h1>
            <h2>Our Countries</h2>
            <div className = "country_search">
                <input className = "country_search-input" type="search" placeholder = "Search..." onChange = {change} value = {search_name.name} name = 'name'/>
            </div>
            <div>
            {
                countries.map((item) => (
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


