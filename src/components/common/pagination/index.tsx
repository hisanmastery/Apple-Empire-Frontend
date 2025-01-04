"use client";
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
  const totalPages = Math.ceil(totalItems / pageSize);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const createPages = () => {
      const pageNumbers: number[] = [];
      if (totalPages <= 5) {
        // If total pages are less than or equal to 5, show all
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // If more than 5 pages, show first, last, current, and add ellipses

        // Show first page
        pageNumbers.push(1);
        // Show ellipsis if current page is far from the start
        if (currentPage > 3) pageNumbers.push(-1); // -1 signifies an ellipsis
        // Show current page and surrounding pages
        for (
          let i = Math.max(2, currentPage - 1);
          i <= Math.min(totalPages - 1, currentPage + 1);
          i++
        ) {
          pageNumbers.push(i);
        }
        // Show ellipsis if current page is far from the end
        if (currentPage < totalPages - 2) pageNumbers.push(-1); // -1 signifies an ellipsis
        // Show last page
        if (totalPages > 1) pageNumbers.push(totalPages);
      }
      setPages(pageNumbers);
    };

    createPages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, pageSize, currentPage]);

  const handlePageChange = (page: number) => {
    if (page !== -1 && page !== currentPage && page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        className={`flex justify-center items-center w-10 h-10 ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500"
        } text-white font-bold rounded-full`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <icons.previousIcon className="text-lg" />
      </button>

      {pages.map((page, index) =>
        page === -1 ? (
          <span key={index} className="text-white">
            ...
          </span> // Render ellipsis
        ) : (
          <button
            key={page}
            className={`w-10 h-10 ${
              page === currentPage ? "bg-blue-500" : "bg-orange-500"
            } text-white font-bold rounded-full`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={`flex justify-center items-center w-10 h-10 ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-500"
        } text-white font-bold rounded-full`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <icons.nextIcon className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
