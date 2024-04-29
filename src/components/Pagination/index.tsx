"use client"
import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}:any) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
    }
  return (
    <div className="flex items-center justify-center gap-2">
      {pages.map((page, index) => {
        return (
          <button
            className={`w-10 h-10  ${
              page === currentPage ? "bg-blue-500" : "bg-orange-500"
            } text-white font-bold rounded-full`}
            key={index}
            onClick={() => setCurrentPage(page)}
            >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;