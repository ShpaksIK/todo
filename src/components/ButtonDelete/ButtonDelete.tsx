import React from 'react';
import style from './ButtonDelete.module.scss';

interface ButtonDeleteProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ children, onClick }) => {
  return (
    <button className={style.buttonDelete} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonDelete;
