import Link from "next/link";
import SelectBox from "./Selectbox";
import Image from "next/image";
export default function TopBar() {
    return (
        <>
            <div
                className={`w-full bg-white h-10 border-b`}
            >
                <div className="container mx-auto h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="topbar-nav">
                            <ul className="flex space-x-6">
                                <li>
                                    <Link href="/profile">
                                        <span className="text-xs leading-6 text-qblack font-500">
                                            Account
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tracking-order">
                                        <span className="text-xs leading-6 text-qblack font-500">
                                            Track Order
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <span className="text-xs leading-6 text-qblack font-500">
                                            Support
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="topbar-dropdowns sm:block hidden">
                            <div className="flex space-x-6">
                                <div className="country-select flex space-x-1 items-center">
                                    <SelectBox options={["United States", "Bangladesh"]} />
                                    <div>
                                    </div>
                                </div>
                                <div className="currency-select flex space-x-1 items-center">
                                    <SelectBox options={["USD", "BDT"]} />
                                </div>
                                <div className="language-select flex space-x-1 items-center">
                                    <SelectBox options={["Bangla", "english"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
