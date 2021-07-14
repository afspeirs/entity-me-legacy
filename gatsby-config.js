const packageJson = require('./package.json');

module.exports = {
	siteMetadata: {
		author: 'AFSpeirs',
		description: packageJson.description,
		title: 'EntityMe',
		version: packageJson.version,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'EntityMe',
				short_name: 'EntityMe',
				description: packageJson.description,
				start_url: '/',
				background_color: '#9c27b0',
				theme_color: '#9c27b0',
				display: 'standalone',
				icon: 'src/images/logo.svg',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
	],
};
