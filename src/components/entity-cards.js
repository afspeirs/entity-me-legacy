import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'react-simple-snackbar';

import styles from '../styles/entity-cards.module.scss';

const EntityCards = ({ entities }) => {
  const [openSnackbar] = useSnackbar({
    position: 'bottom-left',
  });

  const handleEntityClick = (text) => {
    const arrayOfEntities = text.split(' ');
    // console.log(arrayOfEntities);

    if (!arrayOfEntities[0]) return;

    navigator.clipboard.writeText(arrayOfEntities[0])
      .then(() => {
        openSnackbar(`Copied the following character to the clipboard: ${arrayOfEntities[0]}`);
        // console.log(`Copied the following character to the clipboard: ${arrayOfEntities[0]}`);
      })
      .catch((error) => {
        console.error(`Could not copy text: ${error}`); // eslint-disable-line no-console
      });
  };

  return (
    <div className={styles.container}>
      {entities.map((entity) => (
        <div
          key={entity.title}
          className={styles.card}
          title={entity.title}
          data-block={entity.data_block}
          data-category={entity.data_category}
          data-set={entity.data_set}
        >
          <ul>
            {entity.info.map((info) => (
              <li
                key={info.text}
                className={styles[info.class]}
              >
                <button
                  type="button"
                  onClick={() => handleEntityClick(info.text)}
                >
                  <code>
                    {info.text}
                  </code>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

EntityCards.propTypes = {
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
  ).isRequired,
};

export default EntityCards;
