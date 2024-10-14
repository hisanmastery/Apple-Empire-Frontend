import React from "react";
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
      <DiscountDetails/>
      <Products />
      
    </div>
  );
};

export default OfferDetail;
