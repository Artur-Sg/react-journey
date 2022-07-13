import React from 'react';
import classes from './AppButton.module.css';

const AppButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${classes.appButton} ${className}`}>
      {children}
    </button>
  );
};

export default AppButton;
