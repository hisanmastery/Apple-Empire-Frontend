'use client'
import Home from "@/components/home";
import HeroSection from "@/components/home/hero-section/index.";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const DashboardPageLayout = () => {
  return (
    <main>
      <HeroSection />
      <Home/>
      <FloatingWhatsApp phoneNumber="01907252606" accountName="Apple Empire" avatar="https://appleempire.hisanmastery.com/assets/images/Apple-Empire-Logo.svg" />
    </main>
  );
};

export default DashboardPageLayout;
