import React from 'react';

type HeaderProps = {
  highscore: number;
  score: number;
};

const Header: React.FC<HeaderProps> = ({ highscore, score }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between mt-4 sm:mx-4">
      <h1 className="text-center sm:text-left">Pokémon!</h1>
      <div className="text-center sm:text-right">
        <p>Highscore: {highscore}</p>
        <p>Score: {score}</p>
      </div>
    </header>
  );
};

export default Header;
