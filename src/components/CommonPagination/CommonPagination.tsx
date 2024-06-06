import React, { useState } from "react";

const CommonPagination = ({
  handlePaginationChange,
  totalPages,
  setfilterItem,
}: any) => {
  const [active, setActive] = useState(1);

  const getItemClassName = (index: any) =>
    `flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
      active === index ? "bg-[#8f6456] text-white" : "text-[#8f6456]"
    }`;

  const getPageNumbers = () => {
    const totalPages = 20; // Example total number of pages
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (active <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (active >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = active - 2; i <= active + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handleClick = (pageNumber: any) => {
    if (pageNumber === "...") return;
    setActive(pageNumber);
  };

  const next = () => {
    if (active === 20) return; // Assuming total pages is 20
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  console.log("active", active);
  return (
    <>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 rounded-full px-3 py-1 bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-100"
          onClick={prev}
          disabled={active === 1}
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          {getPageNumbers().map((pageNumber, index) => (
            <button
              key={index}
              className={getItemClassName(pageNumber)}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-2 rounded-full px-3 py-1 bg-transparent border border-gray-300 text-gray-500 hover:bg-gray-100"
          onClick={next}
          disabled={active === 20} // Assuming total pages is 20
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CommonPagination;
