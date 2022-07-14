import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AppNavbar.module.css';

const AppNavbar = () => {
  return (
    <ul className={classes.navbar}>
      <li className={classes.navbar__link}>
        <Link to="about">About</Link>
      </li>
      <li className={classes.navbar__link}>
        <Link to="posts">Posts</Link>
      </li>
    </ul>
  );
};

export default AppNavbar;
