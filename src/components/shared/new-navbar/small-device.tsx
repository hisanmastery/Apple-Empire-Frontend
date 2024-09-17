import { icons } from '@/constants/icons';
import React, { useState, useEffect, useRef } from 'react';
import SearchBox from './SearchBox';

const SmallDevice = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const searchBoxRef = useRef<HTMLDivElement>(null); // Use ref to detect outside clicks

    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setIsSearchBarOpen(prev => !prev);
    };

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
                <button aria-label="Menu" className="focus:outline-none">
                    <icons.barsIcon />
                </button>
            </div>

            {isSearchBarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div ref={searchBoxRef} className="absolute top-0 left-0 right-0 mx-auto bg-white w-full max-w-sm rounded-lg shadow-lg p-4 mt-4">
                <SearchBox />
            </div>
            </div>
            )}
        </div>
    );
};

export default SmallDevice;
