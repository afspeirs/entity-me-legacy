const description = 'A simple static site to show all of the HTML entities, and provide an easy method of copying its contents';

module.exports = {
  siteMetadata: {
    author: 'AFSpeirs',
    description,
    title: 'EntityMe',
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
        icon: 'src/images/logo.svg',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
  ],
};
