
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DashboardPreview from '../components/DashboardPreview';
import FeatureCards from '../components/FeatureCards';
import MobileApp from '../components/MobileApp';
import Testimonials from '../components/Testimonials';
import PricingPlans from '../components/PricingPlans';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <FeatureCards />
      <MobileApp />
      <Testimonials />
      <PricingPlans />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Index;
