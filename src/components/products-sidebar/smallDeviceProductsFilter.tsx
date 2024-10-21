import React from "react";
import SheetDrawer from "../common/sheet-drawer/indext";
import ProductsSideBar from ".";

const SmallDeviceProductsFilter = ({ isOpen, setIsOpen }: any) => {
  return (
    <SheetDrawer isOpen={isOpen} setIsOpen={setIsOpen} direction="left" title="Products Filter">
      <ProductsSideBar />
    </SheetDrawer>
  );
};

export default SmallDeviceProductsFilter;
