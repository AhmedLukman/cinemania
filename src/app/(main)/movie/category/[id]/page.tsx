import MovieCategoryPage from "@/components/page/MovieCategoryPage";
import { MoviesUrl } from "@/lib/constants";
import { TMediaResponse, TMovie } from "@/lib/types";
import { getMedia } from "@/lib/utils";
import { notFound } from "next/navigation";

const MovieCategoryFetchPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const url =
    id === "trending"
      ? MoviesUrl.Trending + "/day"
      : id === "upcoming"
      ? MoviesUrl.Upcoming
      : id === "top-rated"
      ? MoviesUrl.TopRated
      : id === "now-playing"
      ? MoviesUrl.Playing
      : '';

  if (!url) notFound();

  const movieResponse = (await getMedia(
    `${url}?language=en-US&page=1`
  )) as TMediaResponse<TMovie>;

  return <MovieCategoryPage movieResponse={movieResponse} id={id}  />;
};

export default MovieCategoryFetchPage;
