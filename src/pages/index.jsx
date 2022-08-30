import React from 'react';

import Image from '../images/gatsby.png';
import Layout from '../layouts/Layout';

const Home = () => (
  <Layout>
    <h1 className="text-xl">Home</h1>
    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
    aut consequuntur aspernatur corrupti ratione, odit similique tenetur
    accusantium, est nostrum esse minus iure voluptatum nihil cumque
    blanditiis non? Odit.</p>
    <img
        className="my-4"
        alt="Avatar"
        src={Image}
      />
  </Layout>
);

export default Home;
