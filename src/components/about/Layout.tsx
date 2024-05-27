import { useState } from "react";
import DiscountBanner from "./DiscountBanner";

export default function Layout({ children, childrenClasses }: any) {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
                {children && children}
            </div>
            <DiscountBanner />
        </>
    );
}