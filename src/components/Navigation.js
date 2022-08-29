import React from 'react';
import { Link } from 'gatsby';

const NAVIGATION = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/contact',
    title: 'Contact'
  },
  {
    path: '/blog',
    title: 'Blog'
  },
];

const Nav = () => (
  <nav>
    <ul>
      {NAVIGATION.map((item) => (
        <li key={item.title}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;