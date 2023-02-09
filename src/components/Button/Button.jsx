import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
