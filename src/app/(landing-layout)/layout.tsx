"use client";
import Carts from "@/components/carts";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar";
import NewNavbar from "@/components/shared/new-navbar";
import Middlebar from "@/components/shared/new-navbar/MiddleNavbar";
import useAuth from "@/hooks/useAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <Navbar /> */}
      <Middlebar/>
      <NewNavbar />
      {/* <Carts /> */}
      {/* children content */}
      <div className="overflow-auto col-span-4 p-1">{children}</div>
      <Footer />
    </main>
  );
};

export default DashboardLayout;
