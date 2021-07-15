import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import EntityCards from '../components/entity-cards';
import Container from '../components/container';

const IndexPage = ({ data }) => {
	const { entities } = data.entity;
	// console.log(entities); // eslint-disable-line no-console

	return (
		<Container>
			<EntityCards entities={entities} />
		</Container>
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
