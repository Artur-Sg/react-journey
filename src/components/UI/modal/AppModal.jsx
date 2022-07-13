import React from 'react';
import classes from './AppModal.module.css';

const AppModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.appModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={classes.appModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      ;
    </div>
  );
};

export default AppModal;
