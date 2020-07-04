import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import styles from '../styles/layout.module.scss';
import '../styles/layout.scss';

const Layout = ({ children }) => (
  <div className={styles.root}>
    <Header />

    <main className={styles.scroller}>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
