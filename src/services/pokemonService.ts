export const fetchPokemonData = async (amount: number) => {
    try {
      const responses = await Promise.all(
        Array.from({ length: amount }, (_, i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
        )
      );
      const pokemons = await Promise.all(
        responses.map((response) => response.json())
      );
      return pokemons;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    //   throw error; 
    }
  };