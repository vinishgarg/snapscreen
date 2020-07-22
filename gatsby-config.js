module.exports = {
  pathPrefix: `/clipshare`,
  siteMetadata: {
    siteUrl: `https://www.snapscreen.com`,
    title: `Snapscreen`,
    description: `Clipshare – The content sharing revolution for TV/OTT.`,
    author: `@snapscreen`,
    twitter: `snapscreen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`, // this enables Progressive Web App + Offline functionality
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Snapscreen Inc`,
        short_name: `Snapscreen`,
        start_url: `/`,
        background_color: `#EFEFEF`,
        theme_color: `#06233D`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components', // <- will become ./src/components
          '@assets': './assets', // <- will become ./src/assets
        }
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/helper/redirect.js`),
      },
    },
  ],
}
