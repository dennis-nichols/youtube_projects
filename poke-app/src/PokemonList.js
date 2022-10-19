import React from 'react'

// we are using destructuring here to just pass pokemon instead of props.pokemon
export default function PokemonList({ pokemon }) {
  return (
    //having a key in the top level element of the loop element helps react with rendering
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}
