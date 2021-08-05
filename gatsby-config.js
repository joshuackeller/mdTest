module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MD Test",
  },
  plugins: ["gatsby-plugin-styled-components",
  "styled-components",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/content`
    }
  },
  `gatsby-transformer-remark`
],

};
