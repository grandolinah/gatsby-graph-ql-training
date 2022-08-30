import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Navigation';

const Layout = ({ children }) => (
  <div className="min-w-full"> 
    <Nav />
    <main className="bg-slate-50 min-h-screen p-4">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
