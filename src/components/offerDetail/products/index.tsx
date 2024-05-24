import React from 'react';
import products from "@/../../public/category.json"


const Products = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between bg-gray-200 p-2 mx-8 rounded-md">
          <h3 className="lg:text-xl sm:text-xs  text-black font-semibold">Year End Sale 2023</h3>
          <div className="flex lg:gap-5 sm:gap-3">
            <h3 className="lg:text-xl sm:text-xs text-black font-semibold">Sort By :</h3>
            <select>
              <option value="1">Default</option>
              <option value="2">Price Low to High</option>
            <option value="3">Price High to Low</option>
            </select>
          </div>
        </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 container mt-4">
      {products?.top_items?.map((product, index)=>{
        const {name, price, image} = product;
        return <div key={index} className="text-center border shadow p-5 rounded-md bg-white relative">
              <span className="bg-orange-400 text-white text-sm py-1 px-2 rounded-md absolute right-2 top-2"> 15% OFF</span>
              <img className="hover:scale-110 transition delay-300 duration-300 ease-in-out" src={image} alt="product image" />
              <h1 className="text-md font-bold">{name}</h1>
              <p>{price} <del>500$</del></p>
              <div className ="flex gap-5 justify-center">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold my-2 py-1 px-3 rounded-lg ">
              Buy Now
            </button>
              <button className="border-2 border-orange-400 text-orange-400  my-2 py-1 px-3 rounded-lg ">
              Add to Cart
            </button>
              </div>
        </div>
      })}
      </div>

    </div>
  );
}

export default Products;
