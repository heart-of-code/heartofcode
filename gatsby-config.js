
/**
 * gatsby-config.js
 * 
 * Site configuration options are placed here.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Heart of Code',
  },
  plugins: [
    'gatsby-plugin-react-helmet', // lets us modify the site metadata in any component
    'gatsby-plugin-styled-components' // used to style the website
  ],
};