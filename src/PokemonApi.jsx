import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const PokemonApi = () => {
    const [pokemonData, setPokemonData] = useState([]);
    
    useEffect(() => {
        fetch("https://coinmap.org/api/v1/venues/")
            .then((resp) => {
                return resp.json()
            }).then((response) => {
                console.log(response, "response")
                setPokemonData(response)
            })
    }, [])
    console.log(pokemonData,"pokemonData")
    return (
        <><Navbar/></>
    )
}

export default PokemonApi