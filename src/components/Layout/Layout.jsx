import React from 'react';
import Header from '../Header/Header';
import styles from '../Layout/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>;
    </>
  );
};

export default Layout;
