import Offers from "@/components/offers";
import offerDatas from "@/../../public/offers.json"
import React from "react";

const OffersPage = () => {
  return (
    <div>
      <Offers offers={offerDatas}/>
    </div>
  );
};

export default OffersPage;
