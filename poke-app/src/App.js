//imports the useState hook
import React, { useState } from 'react';
import PokemonList from './PokemonList';

function App() {
  //passes a destructured array into useState
  //first the acutal data, then our way to update that data
  const [pokemon, setPokemon] = useState(['bulbasaur','charmander'])
  return (
    <PokemonList pokemon = {pokemon}/>
  );
}

export default App;
