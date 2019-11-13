import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
    const [pokemon, updatePokemon] = useState([])
    useEffect(
        //ComponentDidMount && ComponentDidUpdate (if left blank - no [])
        ()=> {
            axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => updatePokemon(res.data.results))
            // return () => serves as ComponentDidUnmount (for clean up?)
        }, [] // []--> conditions for ComponentDidUpdate (will not update since blank)
    )

    return (

        <div>
            
            {JSON.stringify(pokemon)}

        </div>
    )
}