import React, { createContext, useEffect, useState } from 'react'

export const CardContext = createContext()

export const CardProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(()=>{

      const pokemonDetails = async() => {
        const api = 'https://pokeapi.co/api/v2/pokemon/'
        const firstApiData = await fetch(api)
        const data = await firstApiData.json()
        
        const results = data.results;

        const pokeData = await Promise.all(results.map(async (pokemon, i) => {
          const pokemonRes = await fetch(pokemon.url);
          const pokemonData = await pokemonRes.json();

          return {
            index: i + 1,
            name: pokemonData.name,
            details: pokemonData.sprites.front_default
          }
        }))
                               
        setData(pokeData);
        setLoading(false);
        
      }
      
      pokemonDetails();
    }, [])

  return (
    <CardContext.Provider value={{data, loading, search , setSearch}}>
        {children}
    </CardContext.Provider>
  )
}

