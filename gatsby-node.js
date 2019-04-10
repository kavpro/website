/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
/*
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pastWorkTemplate = path.resolve(`src/templates/work-template.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors)
      return reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.map(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pastWorkTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
    return
  })
}

//Creates slugs for markdown pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: `content`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/work${relativeFilePath}`,
    })
  }
}
*/
