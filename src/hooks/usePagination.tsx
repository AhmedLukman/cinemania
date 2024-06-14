import { TMovie, TTVShow } from "@/lib/types";
import { useEffect, useState } from "react";

export const useClientSidePagination = ({credits, itemsPerPage}: {
    credits: TMovie[] | TTVShow[];
    itemsPerPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagedItems, setPagedItems] = useState(credits);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPagedItems(credits.slice(startIndex, endIndex));
  }, [currentPage, credits, itemsPerPage]);

  const totalPages = Math.ceil(credits.length / itemsPerPage);

  return { pagedItems, currentPage, setCurrentPage, totalPages };
};
