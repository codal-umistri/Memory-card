import { Welcome } from '../utils/definition';

export const fetchPokemonData = async (amount: number): Promise<Welcome[]> => {
  try {
    const responses = await Promise.all(
      Array.from({ length: amount }, (_, i) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
      )
    );

    const pokemons = await Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch Pokémon with status: ${response.status}`
          );
        }
        return response.json();
      })
    );

    console.log(pokemons);
    return pokemons;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error; 
  }
};
