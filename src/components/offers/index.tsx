import React from "react";
import Link from "next/link";
import Image from "next/image";
const Offers = ({ offers }: any) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-4">
      {offers?.offers?.map((offer: any) => (
        <div
          key={offer.id}
          className="text-center border rounded-lg shadow bg-white p-4 relative"
        >
          <Image
            src={offer.image}
            alt="offer image"
            width={200}
            height={250}
            className="w-full h-[250px] rounded-[8px]"
          />
          <div className="pt-4 px-4 ">
            <h4 className="text-2xl font-semibold text-center">
              {offer?.title}
            </h4>
            <p className="text-sm font-normal text-center pt-3 pb-14">
              {offer.description}
            </p>
            <div className="absolute -bottom-20 left-0 right-0 px-4 w-full pb-24">
              <button className=" w-full bg-_primary/75 hover:bg-_black text-white text-lg font-normal py-2 px-4 rounded-[5px] ">
                <Link href={`/offerDetails/${offer?.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
