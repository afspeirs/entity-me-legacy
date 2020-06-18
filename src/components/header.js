import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'darksalmon',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
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
