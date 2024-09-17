/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, ChangeEvent } from 'react';

type InputProps = {
  cardAmount: number | string;
  handleCardAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: FunctionComponent<InputProps> = ({
  cardAmount,
  handleCardAmountChange,
}) => {
  return (
    <div className="flex flex-col items-center mt-3">
      <label htmlFor="card-amount" className="mb-2">
        Cards (Max 30):
      </label>
      <input
        id="card-amount"
        type="number"
        min={1}
        max={30}
        value={cardAmount}
        onChange={handleCardAmountChange}
        className="border rounded p-2"
      />
    </div>
  );
};

export default CustomInput;
