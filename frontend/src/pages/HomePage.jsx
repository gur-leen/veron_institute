import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Feature_1 from '../components/Feature_1/Feature_1';
import Feature_2 from '../components/Feature_2/Feature_2';
import Feature_3 from '../components/Feature_3/Feature_3';
import Feature_4 from '../components/Feature_4/Feature_4';

function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Feature_1 />
      <Feature_2 />
      <Feature_3 />
      <Feature_4 />
      <Footer />
    </>
  );
}

export default HomePage;

