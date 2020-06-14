module.exports = {
  siteMetadata: {
    title: `Leslie Belloc-Pinder Arbitration`,
    description: `Arbitration, adjudication, and decision-making resolution. Leslie Belloc-Pinder is a Saskatoon based lawyer with years of experience in arbitration and family law. Her Alternate Dispute Resolution (ADR) practice aims for quick and effective dispute resolution.`,
    author: `www.bigshrek.tech`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/circle.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
