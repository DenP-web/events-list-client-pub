import React, { memo } from "react";

import styles from './Button.module.css'

const Button = ({ title, active, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${active ? styles.active : ""}`} type={type}>
      {title}
    </button>
  );
};

export default Button;
