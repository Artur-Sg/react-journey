import React from 'react';
import AppButton from '../button/AppButton';
import { usePagination } from '../../../hooks/usePagination';
import classes from './AppPagination.module.css';

const AppPagination = ({ totalPages, currentPage, changePage }) => {
  const pages = usePagination(totalPages);

  return (
    <>
      <p className={classes.total}>Total pages: {totalPages}</p>
      {pages.map((p) => (
        <AppButton
          className={
            currentPage === p
              ? `${classes.page} ${classes.page__current}`
              : `${classes.page}`
          }
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </AppButton>
      ))}
    </>
  );
};

export default AppPagination;
