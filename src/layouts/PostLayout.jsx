import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"

import Layout from './Layout';

const PostLayout = ({ data, children }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, author, date, description } = frontmatter;


  return (
    <Layout>
      <span className="py-2 text-sm text-purple-500">
        <Link to="/blog" >Back to blogs</Link>
      </span>
      <h2 className="my-16 text-purple-700 text-">{title}</h2>
      <h3 className="text-zinc-500 text-sm">{author} from {date}</h3>
      <h4>{description}</h4>
      <div className="text-slate-500 text-base">
        <MDXProvider>
          {children}
        </MDXProvider>
      </div>
    </Layout>
);
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date
        description
      }
    }
  }
`;

PostLayout.propTypes = {
  data: {
    slug:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  },
  children: PropTypes.node.isRequired,
};

export default PostLayout;
