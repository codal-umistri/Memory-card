import React, { useState } from 'react';

const App: React.FC = () => {
  const [cardAmount, setCardAmount] = useState<number | string>(8);

  const handleCardAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value > 30 || value < 0) {
      setCardAmount('');
    } else {
      setCardAmount(value);
    }
  };
  return (
    <>
      <header className="flex mt-4 justify-between xs:flex-col xs:justify-center xs:items-center xs:gap-4 sm:flex-row sm:mx-4">
        <h1>Pokémon!</h1>
        <div className="text-right">
          <p>Highscore: {0}</p>
          <p>Score: {0}</p>
        </div>
      </header>
      <main>
        <div className="flex justify-center mt-3">
          Cards(30 Max):
          <input
            type="number"
            min={1}
            max={30}
            value={cardAmount}
            onChange={(e) => handleCardAmountChange(e)}
          />
        </div>
      </main>
    </>
  );
};

export default App;
