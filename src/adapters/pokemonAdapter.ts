import { fetchPokemonData } from '../services/pokemonService';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const adaptPokemonData = async () => {
  const pokemons = await fetchPokemonData(30);
  return pokemons?.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    sprites: {
      other: {
        dream_world: {
          front_default:
            pokemon.sprites.other?.dream_world?.front_default || '',
        },
      },
    },
  }));
};
