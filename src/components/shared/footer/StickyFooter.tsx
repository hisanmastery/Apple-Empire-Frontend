import React from 'react';
import Image from "next/image";

function StickyFooter() {
    return (
        <footer className="bg-_primary text-white left-0 bottom-0 w-full fixed h-3 ">
            <div className="flex justify-around items-center"></div>
        </footer>
    );
}

export default StickyFooter;