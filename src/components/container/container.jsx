import PropTypes from 'prop-types';

import Header from '../header';
import * as styles from './container.module.scss';
import './container.scss';

const propTypes = {
	children: PropTypes.node.isRequired,
};

const Container = ({ children }) => (
	<div className={styles.root}>
		<Header />

		<main className={styles.scroller}>
			{children}
		</main>
	</div>
);

Container.propTypes = propTypes;

export default Container;
