module.exports = {
  pathPrefix: `/clipshare`,
  siteMetadata: {
    siteUrl: `https://www.snapscreen.com`,
    title: `Snapscreen`,
    description: `We make TV discoverable and shareable.`,
    author: `@snapscreen`,
    twitter: `snapscreen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Snapscreen Inc`,
        short_name: `Snapscreen`,
        start_url: `/?source=pwa`,
        background_color: `#EFEFEF`,
        theme_color: `#06233D`,
        scope: `/`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/app-icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`, // needs to be after manifest!
      options: {
        precachePages: [`/vision/`, `/solution/`, `/business/`, `/contact/`],
        workboxConfig: {
           globPatterns: [`**/icon-path*`]
        }
      },
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
