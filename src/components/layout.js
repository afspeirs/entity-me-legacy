import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import styles from '../styles/layout.module.scss';
import '../styles/layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <div className={styles.root}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className={styles.scroller}>
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
