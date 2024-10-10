import React from "react";
import SmallDevice from "./small-device";
import MiddleNavbar from "./MiddleNavbar";
import StickyFooter from "../footer/StickyFooter";
import LargeDevice from "./LargeDevice";

const NewNavbar = () => {
  return (
    <section className={"sticky top-0 z-[6]"}>
      <SmallDevice />
      <MiddleNavbar />
      <LargeDevice />
      <StickyFooter />
    </section>
  );
};

export default NewNavbar;
