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
  <nav className="fixed top-0 left-0 w-full flex justify-center bg-slate-200 p-4">
    <ul className="flex justify-between w-1/2">
      {NAVIGATION.map((item) => (
        <li key={item.title} className="m-2 text-lg text-slate-800">
          <Link to={item.path} activeClassName="text-purple-500 underline">{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;