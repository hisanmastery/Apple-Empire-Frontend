// InputQuantityCom.jsx
"use client";
import { useState } from "react";

export default function InputQuantityCom({ quantity, onIncrement, onDecrement }:any) {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const increment = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    onIncrement && onIncrement(newQuantity);
  };

  const decrement = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      onDecrement && onDecrement(newQuantity);
    }
  };

  return (
    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
      <div className="flex justify-between items-center w-full">
        <button onClick={decrement} type="button" className="text-base text-qgray">
          -
        </button>
        <span className="text-qblack">{localQuantity}</span>
        <button onClick={increment} type="button" className="text-base text-qgray">
          +
        </button>
      </div>
    </div>
  );
}
