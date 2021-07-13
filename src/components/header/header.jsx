import { useStaticQuery, graphql } from 'gatsby';

import * as styles from './header.module.scss';

const Header = () => {
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
		<header className={styles.themeBackground}>
			<div className={styles.content}>
				<h1>
					{title}
					<sup><code>{version}</code></sup>
				</h1>
			</div>
		</header>
	);
};

export default Header;
