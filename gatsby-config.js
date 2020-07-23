module.exports = {
  pathPrefix: `/clipshare`,
  siteMetadata: {
    siteUrl: `https://www.snapscreen.com`,
    title: `Snapscreen`,
    description: `We make TV and streaming discoverable and shareable.`,
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
        name: `Snapscreen`,
        short_name: `Snapscreen`,
        description: `We make TV and streaming discoverable and shareable.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#EFEFEF`,
        theme_color: `#06233D`,
        display: `standalone`,
        icon: `${__dirname}/static/app-icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Snapscreen`,
            short_name: `Snapscreen`,
            description: `Wir machen TV und streaming entdeckbar und teilbar.`,
          },
        ],
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
