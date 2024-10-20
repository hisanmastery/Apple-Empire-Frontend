import Offers from "@/components/offers";
import offerDatas from "@/../../public/offers.json";
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
      <Offers offers={offerDatas} />
    </div>
  );
};

export default OffersPage;
