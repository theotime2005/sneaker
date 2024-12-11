import React from 'react';
import Hero from '../components/Hero';
import LatestCollectionn from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollectionn/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  );
};

export default Home;
