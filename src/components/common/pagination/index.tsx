"use client"
import { icons } from "@/constants/icons";
import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  setCurrentPage,
  currentPage,
}) => {
  const [pages, setPages] = useState<number[]>([]);
  const totalPages = Math.ceil(totalItems / pageSize);

  useEffect(() => {
    let tempPages = [];
    for (let i = 1; i <= totalPages; i++) {
      tempPages.push(i);
    }
    setPages(tempPages);
  }, [totalPages]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className={`flex justify-center items-center w-10 h-10 ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500"
        } text-white font-bold rounded-full`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
       <icons.previousIcon className="text-lg"/>
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`w-10 h-10 ${
            page === currentPage ? "bg-blue-500" : "bg-orange-500"
          } text-white font-bold rounded-full`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`flex justify-center items-center w-10 h-10 ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-500"
        } text-white font-bold rounded-full`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
      <icons.nextIcon className="text-lg"/>
      </button>
    </div>
  );
};

export default Pagination;
