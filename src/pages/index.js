import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import styles from './index.module.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const { entities } = data.entity;
  // console.log(entities); // eslint-disable-line no-console

  return (
    <Layout>
      <SEO />

      <table className={styles.table}>
        <tbody>
          {entities.map((entity) => (
            <tr
              key={entity.title}
              className={styles.row}
              title={entity.title}
              data-block={entity.data_block}
              data-category={entity.data_category}
              data-set={entity.data_set}
            >
              {entity.info.map((info) => (
                <td
                  key={info.text}
                  className={`${styles.data} ${styles[info.class]}`}
                >
                  <code>{info.text}</code>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    entity: PropTypes.shape({
      entities: PropTypes.arrayOf(
        PropTypes.shape({
          data_block: PropTypes.string,
          data_category: PropTypes.string,
          data_set: PropTypes.string,
          info: PropTypes.arrayOf(
            PropTypes.shape({
              class: PropTypes.string,
              text: PropTypes.string,
            }),
          ),
          title: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    entity {
      entities {
        data_block
        data_category
        data_set
        info {
          class
          text
        }
        title
      }
    }
  }
`;
