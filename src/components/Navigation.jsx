import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const NAVIGATION = [
  {
    slug:'/',
    title: 'Home'
  },
  {
    slug:'/about',
    title: 'About'
  },
  {
    slug:'/contact',
    title: 'Contact'
  },
  {
    slug:'/blog',
    title: 'Blog'
  },
];

const Nav = () => {
  const location = useLocation();
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    const isIncluded = NAVIGATION.find(item => item.slug === location.pathname);

    setActiveClass(isIncluded === undefined);
  }, [location.pathname]);

  return (
  <nav className="w-full flex justify-center bg-slate-200 p-4">
    <ul className="flex justify-between w-1/2">
      {NAVIGATION.map((item) => (
        <li key={item.title} className={`m-2 text-lg text-slate-800 ${(activeClass 
      && item.slug === '/blog') ? 'text-purple-500 underline' : ''}`}>
          <Link to={item.slug} activeClassName="text-purple-500 underline">{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
)};

export default Nav;
