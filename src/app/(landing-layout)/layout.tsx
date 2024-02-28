import Navbar from "@/components/shared/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {/* children content */}
      <div className="overflow-auto col-span-4 p-1">{children}</div>
    </main>
  );
};

export default DashboardLayout;
