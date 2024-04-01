import { icons } from "@/constants/icons";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const SheetDrawer = ({
  children,
  isOpen = false,
  size = 300,
  direction = "right",
  setIsOpen = () => false,
  title = "Drawre",
  lockBackgroundScroll = true,
}: any) => {
  const toggleDrawer = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };
  return (
    <div>
      <Drawer
        size={size}
        open={isOpen}
        duration={300}
        onClose={toggleDrawer}
        lockBackgroundScroll={lockBackgroundScroll}
        overlayOpacity={0.7}
        direction={direction}
        style={{ backgroundColor: "#EFF1F0", overflow: "auto" }}
      >
        <div className="flex gap-4 items-center absolute  mb-4">
          <icons.leftArrowIcon
            onClick={() => toggleDrawer()}
            className="text-3xl text-_primary hover:text-_dark-color cursor-pointer"
          />
          <h4 className="font-bold text-lg">{title}</h4>
        </div>
        <div className="mt-8">{children}</div>
      </Drawer>
    </div>
  );
};

export default SheetDrawer;
