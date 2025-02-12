import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CommunityHero from '../components/Community/CommunityHero';
import RecentPosts from '../components/Community/RecentPosts';
import Footer from '../components/Footer/Footer';

const CommunityPage = () => {
  return (
    <>
      <Navbar />
      <CommunityHero />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default CommunityPage;

