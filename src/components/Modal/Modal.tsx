import React from 'react';
import style from './Modal.module.scss';
import closeIcon from '../../assets/svg/close.svg';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, setIsOpen, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className={style.modal} onClick={() => setIsOpen(false)}>
      <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
        <button className={style.modal__content__close} onClick={() => setIsOpen(false)}>
          <img src={closeIcon} alt="Закрыть" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
