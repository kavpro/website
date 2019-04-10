const proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: `KavPRO`,
    description: `Independent Creative Consultancy`,
    author: `@Pr0x1m4`,
    siteUrl: `https://kavpro.xyz`,
  },
  developMiddleware: app => {
    app.use(
      '/mail/',
      proxy({
        target: 'http://localhost:5000',
        pathRewrite: {
          '/mail/': '',
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kavpro`,
        short_name: `kavpro`,
        start_url: `/`,
        background_color: `#01A2D7`,
        theme_color: `#01A2D7`,
        display: `standalone`,
        icon: `src/images/dark_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-111158697-2',
      },
    },
  ],
}
