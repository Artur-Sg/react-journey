import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}

      {isAuth ? (
        <>
          <Route path="/" element={<Navigate to="/posts" />}></Route>
          <Route path="/login" element={<Navigate to="/posts" />}></Route>
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
