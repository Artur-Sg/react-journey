import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import AppButton from '../button/AppButton';
import classes from './AppNavbar.module.css';

const AppNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = (e) => {
    setIsAuth(false);
    localStorage.setItem('auth', false);
  };

  return (
    <ul className={classes.navbar}>
      <li>
        <AppButton onClick={logOut}>Log Out</AppButton>
      </li>
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
