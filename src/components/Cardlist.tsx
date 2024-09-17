import {
  useEffect,
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from 'react';
import Card from './Card';
import { fetchPokemonData } from '../services/pokemonService';
import { Welcome } from '../utils/definition';

// Fisher-Yates shuffle algorithm
function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface CardlistProps {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  highscore: number;
  setHighscore: Dispatch<SetStateAction<number>>;
  setOutcome: Dispatch<SetStateAction<string>>;
  modalDisplay: boolean;
  setModalDisplay: Dispatch<SetStateAction<boolean>>;
  cardAmount: number | string;
}

const DisplayCards: FunctionComponent<CardlistProps> = ({
  score,
  setScore,
  highscore,
  setHighscore,
  setOutcome,
  setModalDisplay,
  cardAmount,
}) => {
  const [pokemonData, setPokemonData] = useState<Welcome[]>([]);
  const [trackedList, setTrackedList] = useState<string[]>([]);
  const [flip, setFlip] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const adaptedPokemons = await fetchPokemonData(30);
      console.log(adaptedPokemons);
      setPokemonData(adaptedPokemons);
      setLoading(false);
    };

    fetchData();
  }, []);

  function trackPokemon(name: string) {
    if (!trackedList.includes(name)) {
      setTrackedList((prevData: string[]) => {
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

      if (trackedList.length === Number(cardAmount) - 1) {
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
          {randomArray.map((index: number) => (
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
