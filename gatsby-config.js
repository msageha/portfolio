
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blog`,
        engine: `flexsearch`,
        query: `
          {
            allMdx(sort: {frontmatter: {date: DESC}}) {
              nodes {
                id
                frontmatter {
                  title
                  date
                  tags
                  description
                  slug
                }
                excerpt
                body
              }
            }
          }
        `,
        ref: `id`,
        index: [`title`, `body`, `tags`],
        store: [`id`, `slug`, `title`, `date`, `tags`, `description`, `excerpt`],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            tags: node.frontmatter.tags,
            description: node.frontmatter.description,
            excerpt: node.excerpt,
            body: node.body,
          })),
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
