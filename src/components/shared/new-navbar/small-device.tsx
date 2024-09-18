import { icons } from '@/constants/icons';
import React, { useState, useEffect, useRef } from 'react';
import SearchBox from './SearchBox'; // Adjust path as needed
import SheetDrawer from '@/components/common/sheet-drawer/indext';
import Link from 'next/link';

const SmallDevice = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
    const searchBoxRef = useRef<HTMLDivElement>(null);

    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setIsSearchBarOpen(prev => !prev);
    };

    // Handle click outside search box to close it
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
                setIsSearchBarOpen(false);
            }
        };

        if (isSearchBarOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSearchBarOpen]);

    return (
        <div>
            <div className='flex gap-2'>
                <button onClick={toggleSearchBar} aria-label="Toggle Search Bar" className="focus:outline-none">
                    <icons.SearchIcons />
                </button>
                <button onClick={() => setIsMenuBarOpen(prev => !prev)} aria-label="Menu" className="focus:outline-none">
                    <icons.barsIcon />
                </button>
            </div>

            {/* Render SearchBox if isSearchBarOpen is true */}
            {isSearchBarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div ref={searchBoxRef} className="absolute top-0 left-0 right-0 mx-auto bg-white w-full max-w-sm rounded-lg shadow-lg p-4 mt-4">
                        <SearchBox />
                    </div>
                </div>
            )}

<SheetDrawer isOpen={isMenuBarOpen} setIsOpen={setIsMenuBarOpen} direction="left" title="Menu Items">
    {/* Menu Items */}
    <nav className="flex flex-col gap-6 mt-6 p-6">
        <Link href="/" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.HomeIcon className="w-5 h-5 mr-3 text-_blue" />
            Home
        </Link>
        <Link href="/section/popular-products" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.FaCartIcons className="w-5 h-5 mr-3 text-_blue" />
            Shop
        </Link>
        <Link href="/pre-order" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.PreOrderIcon className="w-5 h-5 mr-3 text-_blue" />
            Pre Order
        </Link>
        <Link href="/about" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.AboutIcon className="w-5 h-5 mr-3 text-_blue" />
            About
        </Link>
        <Link href="/blogs" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.BlogIcon className="w-5 h-5 mr-3 text-_blue" />
            Blogs
        </Link>
        <Link href="/contact" className="flex items-center text-lg font-medium text-gray-800 hover:text-_blue transition-all duration-200">
            <icons.ContactIcon className="w-5 h-5 mr-3 text-_blue" />
            Contact
        </Link>
    </nav>
</SheetDrawer>

        </div>
    );
};

export default SmallDevice;
