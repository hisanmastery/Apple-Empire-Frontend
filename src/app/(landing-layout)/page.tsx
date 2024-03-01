import Carts from "@/components/carts";
import Home from "@/components/home";
import HeroSection from "@/components/home/hero-section/index.";

const DashboardPageLayout = () => {
  return (
    <main>
      <HeroSection />
      <Home/>
      {/* <Carts/> */}
    </main>
  );
};

export default DashboardPageLayout;
