import React from 'react';
import style from './ConfirmModal.module.scss';
import closeIcon from '../../assets/svg/close.svg';
import ButtonDanger from '../ButtonDelete/ButtonDelete';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

interface ConfirmModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  setIsOpen,
  onConfirm,
  title,
  message,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.confirmModal} onClick={handleCancel}>
      <div className={style.confirmModal__content} onClick={(e) => e.stopPropagation()}>
        <div className={style.confirmModal__header}>
          <h3 className={style.confirmModal__title}>{title}</h3>
          <button className={style.confirmModal__close} onClick={handleCancel}>
            <img src={closeIcon} alt="Закрыть" />
          </button>
        </div>
        <div className={style.confirmModal__body}>
          <p className={style.confirmModal__message}>{message}</p>
        </div>
        <div className={style.confirmModal__footer}>
          <ButtonPrimary onClick={handleCancel}>Отмена</ButtonPrimary>
          <ButtonDanger onClick={handleConfirm}>Удалить</ButtonDanger>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
