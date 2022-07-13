import React from 'react';
import classes from './AppInput.module.css';

const AppInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.appInput} />;
});

export default AppInput;
