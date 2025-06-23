import React from 'react';
import style from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, onClick }) => {
  return (
    <button className={style.buttonPrimary} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
