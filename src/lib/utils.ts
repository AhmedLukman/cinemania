import { LazyLoadTypes } from "react-slick";
import {
  BASE_URL,
  CategoryType,
  GENRES,
  ImageSize,
  MEDIA_OPTIONS,
} from "./constants";
import {
  CreatedBy,
  Season,
  TAllCategory,
  TCast,
  TCrew,
  TMediaCreditsResponse,
  TMediaResponse,
  TMovie,
  TMovieDetailsResponse,
  TSingleTVSeasonResponse,
  TTVShow,
  TTVShowDetailsResponse,
} from "./types";

// PLACEHOLDER LOADER
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;

export const getGenreNameById = (genreId: number) => {
  const genre = GENRES.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Unknown"; // If genre is found, return its name, otherwise return "Unknown"
};

export const getMedia = async (url: string) => {
  let result;
  try {
    const res = await fetch(url, MEDIA_OPTIONS);
    if (!res.ok) throw new Error("Something went wrong, please try again");
    result = await res.json();
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }

  return result;
};

export const getCategoryHeading = (id: string) => {
  return id.includes("-")
    ? id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : id.charAt(0).toUpperCase() + id.slice(1);
};

export const getCredits = async (
  url: string,
  id: string,
  role: "cast" | "crew"
) => {
  const credits = (await getMedia(
    url + id + "/credits?language=en-US"
  )) as TMediaCreditsResponse;
  return role === "cast" ? credits.cast : credits.crew;
};

export const getRelatedMedia = async (
  endpoint: string,
  url: string,
  id: string
) => {
  const { results } = (await getMedia(
    url + id + endpoint
  )) as TMediaResponse<TTVShow>;
  return results;
};

export const getMediaCategorySliderSettings = (mediaLength: number) => {
  const settings = {
    infinite: mediaLength <= 4 ? false : true,
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: mediaLength < 4 ? 1 : 4,
    draggable: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    arrows: mediaLength > 4 ? true : false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3, // Show 3 slides at a time for smaller screens
          slidesToScroll: mediaLength < 3 ? 1 : 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time for even smaller screens
          slidesToScroll: mediaLength < 2 ? 1 : 2,
          arrows: false,
        },
      },
    ],
  };
  return settings;
};

export const getImageUrl = (path: string, size: string = ImageSize.Medium) =>
  `${BASE_URL}${size}${path}`;

export const getDirector = (credits: TMediaCreditsResponse) =>
  credits?.crew?.find((person) => person.job === "Director");

export const getPath = (type: CategoryType, id: number) => {
  return type === CategoryType.Cast
    ? `/tv/${id}/people/cast`
    : type === CategoryType.Crew
    ? "Crew"
    : type === CategoryType.Recommended
    ? "Recommended"
    : type === CategoryType.Similar
    ? "Similar"
    : type === CategoryType.NowPlaying
    ? "Now Playing"
    : type === CategoryType.TopRated
    ? "Top Rated"
    : type === CategoryType.Trending
    ? "Trending"
    : type === CategoryType.Upcoming
    ? "Upcoming"
    : null;
};

export const getMediaTitle = (
  media:
    | TTVShow
    | TMovie
    | TMovieDetailsResponse
    | TTVShowDetailsResponse
    | TSingleTVSeasonResponse
) =>
  "original_title" in media
    ? media.original_title
    : "original_name" in media
    ? media.original_name
    : media.name;

export const getAge = (birthday: string) => {
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  // Get the difference in years
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const getGender = (number: number) =>
  number === 0
    ? "Unspecified"
    : number === 1
    ? "Female"
    : number === 2
    ? "Male"
    : "Not known";
