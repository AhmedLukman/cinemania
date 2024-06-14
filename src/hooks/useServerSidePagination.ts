import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie, TTVShow } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { useEffect, useState } from "react";

const useServerSidePagination = <T extends TMovie | TTVShow>({
  media,
  id,
  suggestion,
}: {
  media: T[];
  id: string;
  suggestion: string;
}) => {
  const [updatedMedia, setUpdatedMedia] = useState(media);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentPage === 1) {
      setUpdatedMedia(media);
      return;
    }
    const fetchMediaPage = async () => {
      setIsLoading(true);
      const media = await getMedia(
        `${MoviesUrl.Origin}${id}/${suggestion}?language=en-US&page=${currentPage}`
      ) as TMediaResponse<T>;
      setIsLoading(false);
      setUpdatedMedia(media.results);
    };
    fetchMediaPage();
  }, [currentPage, id, suggestion, media]);
  return {
    updatedMedia,
    currentPage,
    setCurrentPage,
    isLoading,
  };
};

export default useServerSidePagination;
