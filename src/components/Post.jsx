import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Post = ({ data }) => (
  <Link to={`${data.slug}`} className="block mt-4 mb-4 p-6 max-w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h3>
    <p className="font-normal text-gray-700 dark:text-gray-400">Author: {data.author}</p>
  </Link>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Post;
