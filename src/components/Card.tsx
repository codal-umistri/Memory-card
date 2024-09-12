/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import React, { useState } from 'react';

type CardProps = {
  id: number;
  data: any;
  handleClick: (name: string) => void;
  flipStatus: boolean;
};

const Card: React.FC<CardProps> = ({
  id,
  data,
  handleClick,
  flipStatus,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div
      className={classNames('card', {
        'hover': isHovered,
        'flip': flipStatus,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames('card-front', {
          'hide': flipStatus,
        })}
      >
        <img
          src={data[id].sprites.other.dream_world.front_default}
          alt={data[id].name}
          onClick={() => handleClick(data[id].name)}
        />
        <p>{data[id].name}</p>
      </div>
    </div>
  );
};

export default Card;
