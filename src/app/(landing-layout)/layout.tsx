"use client";
import { Toaster } from "react-hot-toast";
import NewNavbar from "@/components/shared/new-navbar";
import NewFooter from "@/components/shared/footer/newFooter";
import WhatsApp from "@/components/whats-app";
import CartManager from "@/components/add-to-cart/cart-manager";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ backgroundColor: "#e9f4ff6e" }}>
      <CartManager />
      <Toaster />
      <NewNavbar />
      <section className=" overflow-auto col-span-4 p-1">{children}</section>
      <NewFooter />
      <WhatsApp />
    </main>
  );
};

export default DashboardLayout;
