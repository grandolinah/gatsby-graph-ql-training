import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Navigation';

const Layout = ({ children }) => (
  <> 
    <Nav />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;