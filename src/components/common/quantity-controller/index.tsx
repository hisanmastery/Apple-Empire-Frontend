import React from "react";

const QuantityController = ({
  countQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: any) => {
  return (
    <div className="flex justify-center items-center w-full mb-2">
      <button
        onClick={() => handleDecrementQuantity(countQuantity)}
        type="button"
        className="text-base mr-2 border-[1px] size-9"
      >
        -
      </button>
      <span className="text-qblack">{countQuantity}</span>
      <button
        onClick={() => handleIncrementQuantity(countQuantity)}
        type="button"
        className="text-base size-9 ml-2 border-[1px]"
      >
        +
      </button>
    </div>
  );
};

export default QuantityController;
