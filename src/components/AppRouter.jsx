import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { routes } from '../router';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}

      <Route path="/" element={<Navigate to="posts" />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
