import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/layout.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.themeBackground}>
    <div className={styles.content}>
      <h1>{siteTitle}</h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: '',
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
