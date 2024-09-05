import React from "react";

const QuantityController = ({
  countQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
  thisItem,
  data
}: any) => {
  return (
    <div className="flex justify-center items-center w-full mb-2">
      <button
        onClick={() => handleDecrementQuantity(data)}
        type="button"
        disabled={thisItem?.quantity>1?false:true}
        className="text-base mr-2 border-[1px] size-9"
      >
        -
      </button>
      <span className="text-qblack">{thisItem?.quantity?thisItem.quantity:1}</span>
      <button
        onClick={() => handleIncrementQuantity(data)}
        type="button"
        className="text-base size-9 ml-2 border-[1px]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityController;
