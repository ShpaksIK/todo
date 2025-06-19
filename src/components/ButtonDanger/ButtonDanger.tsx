import React from 'react';
import style from './ButtonDanger.module.scss';

interface ButtonDangerProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonDanger: React.FC<ButtonDangerProps> = ({ children, onClick }) => {
  return (
    <button className={style.buttonDanger} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonDanger;
