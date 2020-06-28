const {
  npm_package_author_name: author,
  npm_package_description: description,
  npm_package_version: version,
} = process.env;

module.exports = {
  siteMetadata: {
    author,
    description,
    title: 'EntityMe',
    version,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'EntityMe',
        short_name: 'EntityMe',
        description,
        start_url: '/',
        background_color: '#9c27b0',
        theme_color: '#9c27b0',
        display: 'standalone',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    'gatsby-transformer-sharp',
  ],
};
