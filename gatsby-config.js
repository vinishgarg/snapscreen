module.exports = {
  pathPrefix: `/snapscreen`,
  siteMetadata: {
    siteUrl: `https://www.snapscreen.com/`,
    title: `Snapscreen`,
    description: `We make TV and streaming discoverable and shareable.`,
    author: `@snapscreen`,
    twitter: `snapscreen`,
  },
  plugins: [
    `gatsby-plugin-cname`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
          trackingCode: `7433878`,
          respectDNT: true
      },
    },
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
        name: `press`,
        path: `${__dirname}/src/press`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/faq`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy`,
        path: `${__dirname}/src/legal/privacy.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `terms`,
        path: `${__dirname}/src/legal/terms.md`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: 'src',
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
        description: `Share and discover what’s on TV.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#EFEFEF`,
        theme_color: `#06233D`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/app-icon.png`, // This path is relative to the root of the site.
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Snapscreen`,
            short_name: `Snapscreen`,
            description: `Teile und entdecke, was im TV läuft.`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`, // needs to be after manifest!
      options: {
        precachePages: [`/vision`, `/solution`, `/business`, `/contact`, `/try`, `/privacy`, `/terms`],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `de`],
        defaultLanguage: `en`,
        redirect: false,
        redirectComponent: require.resolve(`./src/components/helper/redirect.js`),
      },
    },
  ],
}
