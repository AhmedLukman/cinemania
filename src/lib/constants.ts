import { LazyLoadTypes } from "react-slick";

export const MEDIA_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_AUTH}`,
  },
};

export const MediaUrl = "https://api.themoviedb.org/3/";

export enum MoviesUrl {
  Popular = "https://api.themoviedb.org/3/movie/popular",
  Trending = "https://api.themoviedb.org/3/trending/movie",
  TopRated = "https://api.themoviedb.org/3/movie/top_rated",
  Upcoming = "https://api.themoviedb.org/3/movie/upcoming",
  Origin = "https://api.themoviedb.org/3/movie/",
  Playing = "https://api.themoviedb.org/3/movie/now_playing",
}

export enum PeopleUrl {
  Trending = "https://api.themoviedb.org/3/trending/person",
  Popular = "https://api.themoviedb.org/3/person/popular",
  Latest = "https://api.themoviedb.org/3/person/latest",
}

export enum TVShowsUrl {
  Popular = "https://api.themoviedb.org/3/tv/popular",
  Trending = "https://api.themoviedb.org/3/trending/tv",
  TopRated = "https://api.themoviedb.org/3/tv/top_rated",
  Upcoming = "https://api.themoviedb.org/3/tv/on_the_air",
  Origin = "https://api.themoviedb.org/3/tv/",
  AiringToday = "https://api.themoviedb.org/3/tv/airing_today",
}

export const BASE_URL = "https://image.tmdb.org/t/p/";

export const GENRES = [
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 37, name: "Western" },
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
];

export const MENU = [
  {
    route: "/movie",
    value: "Movies",
  },
  {
    route: "/tv",
    value: "TV Shows",
  },
  {
    route: "/people",
    value: "People",
  },
];

export const FREQUENCY = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
];

export const MINI_SLIDER_OPTIONS = {
  lazyLoad: "progressive" as LazyLoadTypes,
  autoplay: true,
  autoplaySpeed: 6000,
  className: "h-[25svh] cursor-grab",
  arrows: false,
  responsive: [
    {
      breakpoint: 540, // This means at less than 640px screen width
      settings: {
        slidesToShow: 2, // Show only 2 slides
      },
    },
    {
      breakpoint: 800, // This means at less than 640px screen width
      settings: {
        slidesToShow: 3, // Show 3 slides
      },
    },
  ],
  slidesToShow: 5,
  swipeToSlide: true,
  focusOnSelect: true,
};

export enum ImageSize {
  Small = "w300",
  Medium = "w500",
  Large = "w1280",
  Original = "original",
}

export enum PosterType {
  TV,
  Movie,
  TVDetails,
  MovieDetails,
  singleTVSeason,
}

export enum CreditsType {
  MovieDetails,
  TVDetails,
}

export enum MediaType {
  Movie,
  TV,
  MovieDetails,
  TVDetails,
  Season,
  Episode
}

export enum CategoryType {
  Network,
  Season,
  CreatedBy,
  Trending,
  NowPlaying,
  Upcoming,
  Cast,
  Crew,
  Similar,
  Recommended,
  TopRated,
}
