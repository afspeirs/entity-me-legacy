import PropTypes from 'prop-types';
import SnackbarProvider from 'react-simple-snackbar';

import Header from '../header';
import { GlobalStateProvider } from '../../hooks/GlobalState';
import * as styles from './container.module.scss';
import './container.scss';

const propTypes = {
	children: PropTypes.node.isRequired,
};

const Container = ({ children }) => (
	<SnackbarProvider>
		<GlobalStateProvider>
			<div className={styles.root}>
				<Header />

				<main className={styles.scroller}>
					{children}
				</main>
			</div>
		</GlobalStateProvider>
	</SnackbarProvider>
);

Container.propTypes = propTypes;

export default Container;
