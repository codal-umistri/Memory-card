/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Card from './Card';

// Fisher-Yates shuffle algorithm
function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface CardlistProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  highscore: number;
  setHighscore: React.Dispatch<React.SetStateAction<number>>;
  setOutcome: React.Dispatch<React.SetStateAction<string>>;
  modalDisplay: boolean;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  cardAmount: number | string;
}

const DisplayCards: React.FC<CardlistProps> = ({
  score,
  setScore,
  highscore,
  setHighscore,
  setOutcome,
  setModalDisplay,
  cardAmount,
}: any) => {
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [trackedList, setTrackedList] = useState<any>([]);
  const [flip, setFlip] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responses = await Promise.all(
          Array.from({ length: 30 }, (_, i) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`)
          )
        );
        const pokemons = await Promise.all(
          responses.map((response) => response.json())
        );
        setPokemonData(pokemons);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
    fetchData();
  }, []);

  function trackPokemon(name: string) {
    if (!trackedList.includes(name)) {
      setTrackedList((prevData: any) => {
        return [...prevData, name];
      });
      setScore((score += 1));
      randomArray = shuffleArray(randomArray);
      setFlip(true);
      setTimeout(() => {
        setFlip(false);
      }, 1000);

      if (score > highscore) {
        setHighscore(score);
      }

      if (trackedList.length === cardAmount - 1) {
        setOutcome('WIN');
        setModalDisplay(true);
        setTrackedList([]);
        setScore(0);
      }
    } else {
      setOutcome('LOSE');
      setModalDisplay(true);
      setTrackedList([]);
      setScore(0);
    }
  }

  let randomArray = shuffleArray([...Array(cardAmount).keys()]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {pokemonData.length > 0 && (
        <div className="cards-container">
          {randomArray.map((index: any) => (
            <Card
              key={index}
              id={index}
              data={pokemonData}
              handleClick={trackPokemon}
              flipStatus={flip}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayCards;
