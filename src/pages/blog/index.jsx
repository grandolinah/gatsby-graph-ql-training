import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../layouts/Layout';
import Post from '../../components/Post';

const Blog = ({ data }) => (
  <Layout>
    <h1 className="text-xl">Blog</h1>
    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
    aut consequuntur aspernatur corrupti ratione, odit similique tenetur
    accusantium, est nostrum esse minus iure voluptatum nihil cumque
    blanditiis non? Odit.</p>
    <ul>
      {data.allMdx.nodes.map((item) => {
        const { id, frontmatter } = item;

        return <Post key={id} data={frontmatter} />
      })}
    </ul>
  </Layout>
);

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
        }
        id
      }
    }
  }
`;

export default Blog;
