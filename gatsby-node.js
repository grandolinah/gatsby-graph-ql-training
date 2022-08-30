const path = require('path');
const postTemplate = path.resolve(`./src/layouts/PostLayout.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes;

  console.log(posts);

  posts.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
};
