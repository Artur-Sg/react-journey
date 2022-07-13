import React from 'react';
import classes from './AppSelect.module.css';

const AppSelect = ({ options, defaultOption: { name, value }, onChange }) => {
  return (
    <select
      className={classes.appSelect}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value={value}>
        {name}
      </option>

      {options.map(({ name, value }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
