import React from 'react';

import { Product, HeroBanner, FooterBanner } from '@/components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className="products-container">
        {['product 1', 'product 2', 'product 3'].map((product) => product )}
      </div>

      <FooterBanner />
    </>
  );
}

export default Home;
