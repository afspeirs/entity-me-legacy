import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import styles from '../styles/layout.module.scss';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            version
          }
        }
      }
    `,
  );

  const { title, version } = data.site.siteMetadata;

  return (
    <div className={styles.root}>
      <Header siteTitle={title} />

      <main className={styles.scroller}>
        {children}
      </main>
      <span className={styles.visuallyHidden}>
        {version}
      </span>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
