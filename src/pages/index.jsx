import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../layouts/Layout';

const Home = () => (
  <Layout>
    <h1 className="text-xl">Home</h1>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="images/avatar.webp"
      />
    <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
    aut consequuntur aspernatur corrupti ratione, odit similique tenetur
    accusantium, est nostrum esse minus iure voluptatum nihil cumque
    blanditiis non? Odit.</p>
  </Layout>
);

export default Home;
