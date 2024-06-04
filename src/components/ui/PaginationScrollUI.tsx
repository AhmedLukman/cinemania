import { Pagination } from "@nextui-org/react";
import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "react-scroll-to-top";

const PaginationScrollUI = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <ScrollToTop
        smooth
        component={<FontAwesomeIcon icon={faArrowUp} size="lg" />}
        className="hidden md:flex items-center justify-center !shadow-lg !shadow-slate-400 -mr-4"
      />
      <Pagination
        classNames={{
          wrapper: 'gap-x-2',
          cursor:
            "bg-gradient-to-b from-default-500 to-default-800 text-white font-bold",
        }}
        page={currentPage}
        onChange={setCurrentPage}
        total={Math.min(totalPages, 500)}
      />
    </>
  );
};

export default PaginationScrollUI;
