import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import GetQuote from '../components/quote/quote';
import AboutUs from '../components/aboutus/aboutus';

function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <AboutUs />
      <GetQuote />
      <Footer />
    </>
  );
}

export default HomePage;

