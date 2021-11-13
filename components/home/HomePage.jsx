import React from 'react';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Topbar from './Topbar';

const HomePage = () => {
    return (
        <div >
          <Topbar />
          <Navbar/>
          <HeroSection/>
        </div>
    );
};

export default HomePage;