import { TMediaResponse } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { useEffect } from "react";

const useFetchMediaCategory = <T>({
  setIsLoading,
  setMedia,
  setTotalPages,
  url,
  currentPage,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMedia: React.Dispatch<React.SetStateAction<T[]>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  url: string;
  currentPage: number;
}) => {
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const response = (await getMedia(
        `${url}?language=en-US&page=${currentPage}`
      )) as TMediaResponse<T>;
      setMedia(response.results);
      setTotalPages(response.total_pages);
      setIsLoading(false);
    };
    fetch();
  }, [url, currentPage, setIsLoading, setMedia, setTotalPages]);
  return null;
};

export default useFetchMediaCategory;
