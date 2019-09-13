module.exports = {
  pathPrefix: `/clipshare`,
  siteMetadata: {
    title: `Clipshare`,
    description: `The content sharing revolution for TV/OTT.`,
    author: `@zeitvertrieb`,
    twitter: `snapscreen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`, // this enables Progressive Web App + Offline functionality
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
