import React from "react";
import categories from "@/../../public/category.json";
const TopItems = () => {
  return (
    <div className="container mt-10">
  <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
    {categories.top_items.map((category, index) => (
      <div
        className="text-center border rounded shadow p-3 hover:font-bold hover:text-[#FF4C06] hover:border hover:border-[#FF4C06] hover:bg-slate-200 cursor-pointer transition-all ease-in-out duration-500 group"
        key={index}
      >
        <img
          className="w-2/4 mx-auto group-hover:scale-125 transition-all ease-in-out duration-700"
          src={category.image}
          alt="category"
        />
        <h4>{category.name}</h4>
      </div>
    ))}
  </div>
</div>
  );
};

export default TopItems;
