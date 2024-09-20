'use client'
import Home from "@/components/home";
import HeroSection from "@/components/home/hero-section/index.";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const DashboardPageLayout = () => {
  return (
    <main>
      <HeroSection />
      <Home/>
    </main>
  );
};

export default DashboardPageLayout;
