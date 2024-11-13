import Offers from "@/components/offers";
import React from "react";
import Breadcrumbs from "@/components/common/breadcrumbs";

const OffersPage = () => {
  return (
    <div className="container mt-5">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Offers",
            href: "/offers",
          },
        ]}
      />
      <Offers />
    </div>
  );
};

export default OffersPage;
