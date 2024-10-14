import React from "react";
import OfferDetail from "@/components/offerDetail/offerDetail";
const OfferDetailsPage = ({ params }: any) => {
  return (
    <div>
      <OfferDetail params={params} />
    </div>
  );
};

export default OfferDetailsPage;
