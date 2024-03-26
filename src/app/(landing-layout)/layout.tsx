import Carts from "@/components/carts";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <Carts/>
      {/* children content */}
      <div className="overflow-auto col-span-4 p-1">{children}</div>
      <Footer/>
    </main>
  );
};

export default DashboardLayout;
