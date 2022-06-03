import React from 'react';
import { Button as ButtonTypes } from './types';

const Button = ({ label, styles, onClick }: ButtonTypes) => (
  <button className={styles} onClick={onClick}>
    {label}
  </button>
);

export default Button;
