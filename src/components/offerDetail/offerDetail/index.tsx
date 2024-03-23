import React from "react";
import DiscountBanner from "../discount";
import DiscountDetails from "../discountDetails";
import Products from "../products"

interface OfferDetailProps {
  params: {
    id: string; 
  };
}

const OfferDetail: React.FC<OfferDetailProps> = ({ params }) => {
  const { id } = params;
  return (
    <div>
      {/* <h1>offer id: {id}</h1>
      <h1>Hello</h1> */}
      <DiscountBanner/>
      <DiscountDetails/>
      <Products/>
    </div>
  );
};

export default OfferDetail;
