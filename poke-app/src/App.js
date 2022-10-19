//this app will use the axios library to fetch from APIs
//imports the useState hook
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'

function App() {
  //passes a destructured array into useState
  //first the acutal data, then our way to update that data
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  //the second argument of useEffects could be an array of props/argument where if one of those changes, we would run useEffect again.
  //This will call the fetch to be run again each time the page changes
  useEffect(() => {
      setLoading(true);
      let cancel;
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false);
        setNextPageUrl(res.data.results.next);
        setPrevPageUrl(res.data.results.previous);
        setPokemon(res.data.results.map(p => p.name))
  })
  //cancels old requests to the API if a new one is made
  return () => cancel();

  },[currentPageUrl]);

  if (loading) return "Loading..."

  return (
    <PokemonList pokemon = {pokemon}/>
  );
}

export default App;
