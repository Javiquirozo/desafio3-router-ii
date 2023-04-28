import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pokemon.css";


export default () => {
    const [pokemon, setPokemon] = useState({});
    const params = useParams()

    const getPokemon = async (pokemonName) => {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
        const data = await res.json ();
        setPokemon(data);
    };

useEffect ( () => {
    getPokemon(params.pokemonName);
}, []);

return (
    <div className="pokemon-container">
      <h1 className="pokemon-name">{pokemon.name}</h1>

      {pokemon.sprites && (
        <img
          className="pokemon-image"
          height="180"
          src={pokemon.sprites.other.dream_world.front_default}
          alt=""
        />
      )}

      {pokemon.stats && (
        <ul>
            <li>HP: {pokemon.stats[0].base_stat}</li>
            <li>Attack: {pokemon.stats[1].base_stat}</li>
            <li>Defense: {pokemon.stats[2].base_stat}</li>
            <li>Special Attack: {pokemon.stats[3].base_stat}</li>
            <li>Special Defense: {pokemon.stats[4].base_stat}</li>
            <li>Speed: {pokemon.stats[5].base_stat}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Height: {pokemon.height}</li>
        </ul>
      )}
    </div>
    );
};
