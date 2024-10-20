import React from "react";
import OfferDetail from "@/components/offerDetail/offerDetail";
import Breadcrumbs from "@/components/common/breadcrumbs";
const OfferDetailsPage = ({ params }: any) => {
  return (
    <div className="container mt-5">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Offers",
            href: "/offers",
          },
          {
            label: "OfferDetails",
            href: "/offers/offerDetails",
          },
        ]}
      />
      <OfferDetail params={params} />
    </div>
  );
};

export default OfferDetailsPage;
