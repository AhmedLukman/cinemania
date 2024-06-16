import { Pagination } from "@nextui-org/react";
import React from "react";

const PaginationUI = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Pagination
      classNames={{
        wrapper: "gap-x-2",
        cursor:
          "bg-gradient-to-b from-default-500 to-default-800 text-white font-bold",
      }}
      page={currentPage}
      onChange={setCurrentPage}
      total={Math.min(totalPages, 500)}
    />
  );
};

export default PaginationUI;
