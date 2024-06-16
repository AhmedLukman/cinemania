import React from "react";
import MediaCard from "@/components/ui/MediaCard";
import MediaCategory from "@/components/ui/MediaCategory";
import MediaCategorySlider from "@/components/ui/sliders/MediaCategorySlider";
import DetailsPosterContent from "@/components/ui/hero/DetailsPosterContent";
import PosterContainer from "@/components/ui/hero/PosterContainer";
import { ImageSize, MediaType } from "@/lib/constants";
import {
  Collection,
  TMediaCreditsResponse,
  TMovie,
  TMovieDetailsResponse,
  TMediaLinks,
} from "@/lib/types";
import { getImageUrl } from "@/lib/utils";

const MovieDetailsPage = ({
  movie,
  credits,
  similarMovies,
  recommendedMovies,
  collection,
  movieLinks,
}: {
  movie: TMovieDetailsResponse;
  credits: TMediaCreditsResponse;
  similarMovies: TMovie[];
  recommendedMovies: TMovie[];
  collection: Collection;
  movieLinks: TMediaLinks;
}) => {
  const { cast, crew } = credits;
  const img = getImageUrl(collection.backdrop_path, ImageSize.Large);

  return (
    <>
      <PosterContainer media={movie}>
        <DetailsPosterContent
          type={MediaType.MovieDetails}
          media={movie}
          mediaLinks={movieLinks}
          credits={credits}
        />
      </PosterContainer>

      {collection.id && (
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "50% 20%",
          }}
          className={`px-3 py-7 bg-fixed md:px-10 md:py-16 bg-center bg-no-repeat bg-cover relative`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10">
            <MediaCategory
              collectionImages={collection.images}
              media={collection.parts}
              heading={collection.name}
            >
              {collection.overview && (
                <p className="mb-14 -mt-3 md:-mt-6 px-5 md:px-20 text-gray-300">
                  {collection.overview}
                </p>
              )}
              <MediaCategorySlider mediaLength={collection.parts.length}>
                {collection.parts.map((movie) => (
                  <MediaCard
                    className="card-padding"
                    key={movie.id}
                    media={movie}
                    path={`/movie/${movie.id}`}
                  />
                ))}
              </MediaCategorySlider>
            </MediaCategory>
          </div>
        </div>
      )}

      <MediaCategory
        media={cast}
        path={`/movie/${movie.id}/people/cast`}
        heading="Cast"
      >
        <MediaCategorySlider mediaLength={cast.length}>
          {cast.map((castMember) => (
            <MediaCard
              className="card-padding"
              key={castMember.id}
              media={castMember}
              path={`/people/${castMember.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={crew}
        path={`/movie/${movie.id}/people/crew`}
        heading="Crew"
      >
        <MediaCategorySlider mediaLength={crew.length}>
          {crew.map((crewMember) => (
            <MediaCard
              className="card-padding"
              key={crewMember.id}
              media={crewMember}
              path={`/people/${crewMember.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={recommendedMovies}
        path={`/movie/${movie.id}/recommendations`}
        heading="Recommended"
      >
        <MediaCategorySlider mediaLength={recommendedMovies.length}>
          {recommendedMovies.map((recommendedMovie) => (
            <MediaCard
              className="card-padding"
              key={recommendedMovie.id}
              media={recommendedMovie}
              path={`/movie/${recommendedMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>

      <MediaCategory
        media={similarMovies}
        path={`/movie/${movie.id}/similar`}
        heading="Similar"
      >
        <MediaCategorySlider mediaLength={similarMovies.length}>
          {similarMovies.map((similarMovie) => (
            <MediaCard
              className="card-padding"
              key={similarMovie.id}
              media={similarMovie}
              path={`/movie/${similarMovie.id}`}
            />
          ))}
        </MediaCategorySlider>
      </MediaCategory>
    </>
  );
};

export default MovieDetailsPage;
