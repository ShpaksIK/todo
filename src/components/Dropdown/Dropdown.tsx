import React, { useState } from 'react';
import styles from './Dropdown.module.scss';
import dotsSVG from '../../assets/svg/dots.svg';

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      <button className={styles.dropdownButton} type="button">
        <img src={dotsSVG} alt="Раскрыть меню" />
      </button>
      {open && <div className={styles.menu}>{children}</div>}
    </div>
  );
};

export default Dropdown;
