
import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
const Offers= ({ offers }:any) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


    return (
        <div className ="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-20 py-10">
            {offers?.offers?.map((offer:any) => (
                <div key={offer.id} className="text-center border-2 rounded-lg shadow-lg hover:scale-105 cursor-pointer ease-in-out duration-300">
                    <img className="h-48 w-72 mx-auto" src={offer.image} alt="offer image"/>
                    <div className="p-4">
                    <p className='text-sm flex items-center justify-center gap-2'> <FaRegCalendarAlt /> {formattedDate}</p>
                    <h4 className="text-md font-semibold text-center">{offer?.title}</h4>
                    <p className="text-sm text-justify">{offer.description}</p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold my-2 py-1 px-4 rounded-lg ">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Offers;
