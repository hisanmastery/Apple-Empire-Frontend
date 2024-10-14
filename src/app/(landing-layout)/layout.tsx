import { Toaster } from "react-hot-toast";
const NewNavbar = dynamic(() => import("@/components/shared/new-navbar"));
const NewFooter = dynamic(() => import("@/components/shared/footer/newFooter"));
const WhatsApp = dynamic(() => import("@/components/whats-app"));
import CartManager from "@/components/add-to-cart/cart-manager";
import BackToTopButton from "@/components/shared/back-to-top-button";
import dynamic from "next/dynamic";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ backgroundColor: "#e9f4ff6e" }}>
      <CartManager />
      <Toaster />
      <NewNavbar />
      <section className="overflow-auto col-span-4 p-1">{children}</section>
      <NewFooter />
      <WhatsApp />
      <BackToTopButton />
    </main>
  );
};

export default DashboardLayout;
