import React, { useContext } from 'react';
import AppButton from '../components/UI/button/AppButton';
import AppInput from '../components/UI/input/AppInput';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', true);
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <AppInput type="text" placeholder="Login"></AppInput>
        <AppInput type="password" placeholder="Password"></AppInput>
        <AppButton>Enter</AppButton>
      </form>
    </div>
  );
};

export default Login;
