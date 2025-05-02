
module.exports = {
  siteMetadata: {
    title: `Mizuki Sango - Portfolio`,
    description: `珊瑚 彩主紀のポートフォリオページ`,
    author: `Mizuki Sango`,
    siteUrl: `https://msageha.net`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mizuki Sango Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#111827`,
        theme_color: `#111827`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
  pathPrefix: "",
};
