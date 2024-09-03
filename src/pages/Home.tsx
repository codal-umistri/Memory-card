import React, { useState } from 'react';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';
import DisplayModal from '../components/Modal';
import DisplayCards from '../components/Cardlist';

const MAX_CARD_AMOUNT = 30;

const Home: React.FC = () => {
  const [cardAmount, setCardAmount] = useState<number | string>(8);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [outcome, setOutcome] = useState<string>('');
  const [highscore, setHighscore] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleCardAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value) || value > MAX_CARD_AMOUNT || value < 0) {
      setCardAmount('');
    } else {
      setCardAmount(value);
    }
  };
  return (
    <>
      <Header score={score} highscore={highscore} />
      <main>
        <CustomInput
          cardAmount={cardAmount}
          handleCardAmountChange={handleCardAmountChange}
        />
        <DisplayModal
          outcome={outcome}
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <DisplayCards
          score={score}
          setScore={setScore}
          highscore={highscore}
          setHighscore={setHighscore}
          setOutcome={setOutcome}
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
          cardAmount={cardAmount}
        />
      </main>
    </>
  );
};

export default Home;
