import classNames from 'classnames';
import { useState, FunctionComponent } from 'react';
import { Welcome } from '../utils/definition';

type CardProps = {
  id: number;
  data: Welcome[];
  handleClick: (name: string) => void;
  flipStatus: boolean;
};

const Card: FunctionComponent<CardProps> = ({
  id,
  data,
  handleClick,
  flipStatus,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classNames('card', {
        hover: isHovered,
        flip: flipStatus,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames('card-front', {
          hide: flipStatus,
        })}
      >
        <img
          src={data[id]?.sprites?.other?.dream_world?.front_default}
          alt={data[id]?.name}
          onClick={() => handleClick(data[id]?.name)}
        />
        <p className='text-center'>{data[id]?.name}</p>
      </div>
    </div>
  );
};

export default Card;
