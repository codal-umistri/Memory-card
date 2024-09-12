import React from 'react';
import classNames from 'classnames';

interface ModalProps {
  outcome: string;
  modalDisplay: boolean;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisplayModal: React.FC<ModalProps> = ({
  outcome,
  modalDisplay,
  setModalDisplay,
}) => {
  if (!modalDisplay) {
    console.log('Modal is not displayed');
    // return null;
  }

  return (
    <div
      className={classNames('modal-overlay', {
        'flex flex-col': modalDisplay,
        'hidden': !modalDisplay,
      })}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className={classNames('modal', {
          'flex flex-col gap-4': modalDisplay,
          'hidden': !modalDisplay,
        })}
        role="document"
      >
        <h1 id="modal-title">YOU {outcome}!</h1>
        <button onClick={() => setModalDisplay(false)}>Retry?</button>
      </div>
    </div>
  );
};

export default DisplayModal;
