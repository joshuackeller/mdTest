const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const path = `food${edge.node.fields.slug}`
      const correctPath = path.slice(0,-1)
      const slug = edge.node.fields.slug
      actions.createPage({
        path: correctPath,
        component: require.resolve(`./src/pages/docs.tsx`),
        context: { slug: slug },
      })
    })
  }
