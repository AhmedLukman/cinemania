import { CategoryType, CreditsType, PosterType } from "./constants";

export type TMediaBase = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovie = TMediaBase & {
  original_title: string;
  genre_ids: number[];
  release_date: string;
};

export type TTVShow = TMediaBase & {
  original_name: string;
  genre_ids: number[];
  first_air_date: string;
};

export type Collection = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  parts: TMovie[];
}

export type TMediaResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type TPosterSideImage = { posterPath: string; title: string };

export type TVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
};

export type TVideoResponse = {
  id: number;
  results: TVideo[];
};

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type LastEpisodeToAir = {
  id: number;
  name: string;
  overview: string;
  episode_number: number;
  production_code: string;
  season_number: number;
  still_path: string;
  air_date: string;
};

export type Network = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TTVShowDetailsResponse = TMediaBase & {
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  networks: Network[];
  tagline: string;
  type: string;
};

export type TMovieDetailsResponse = TMediaBase & {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string
  };
  budget: number;
  homepage: string;
  imdb_id: string;
  original_title: string;
  genres: Genre[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
};

export type TPerson = {
  id: number;
  adult: boolean;
  original_name: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  name: string;
};

export type TPersonDetails = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string
  gender: number
  homepage: string
  id: number;
  imdb_id: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export type TPersonMediaCredits<T> = {
  cast: T[];
  crew: T[];
  id: number
}

export type KnownFor = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TPeople = TPerson & {
  media_type: string;
  known_for: KnownFor[];
};

export type TCast = TPerson & {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCrew = TPerson & {
  credit_id: string;
  department: string;
  job: string;
};
export type TMoviesPage = {
  popularMovies: TMovie[];
  nowPlayingMovies: TMovie[];
  trendingDailyMovies: TMovie[];
  topRatedMovies: TMovie[];
  upcomingMovies: TMovie[];
};

export type TTVShowPage = {
  popularTVShows: TTVShow[];
  trendingDailyTVShows: TTVShow[];
  topRatedTVShows: TTVShow[];
  upcomingTVShows: TTVShow[];
};

export type TMediaCreditsResponse = {
  id: number;
  cast: TCast[];
  crew: TCrew[];
};

export type TMedia =
  | TMovie[]
  | TTVShow[]
  | TCrew[]
  | TCast[]
  | TPeople[]
  | CreatedBy[]
  | Season[]
  | Episode[]
  | Network[];

  export type TMediaGrid =
    | TCast[]
    | TCrew[]
    | TMovie[]
    | TTVShow[]
    | TPeople[]
    | Episode[];

export type TMediaCard =
  | TMovie
  | TTVShow
  | TCrew
  | TCast
  | TPeople
  | CreatedBy
  | Season
  | Episode;

export type TImage = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type TImageResponse = {
  backdrops: TImage[];
  id: number;
  logos: TImage[];
  posters: TImage[];
};

export type Episode = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: TCrew[];
  guest_stars: GuestStar[];
};

export type GuestStar = TCast & {
  credit_id: never;
};

export type TSingleTVSeasonResponse = {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type TMediaCategoryArray =
  | TMovie[]
  | TTVShow[]
  | TCrew[]
  | TCast[]
  | TPeople[]
  | CreatedBy[]
  | Season[]
  | Episode[]
  | Network[];

export type TMediaCategory =
  | TMovie
  | TTVShow
  | TCrew
  | TCast
  | TPeople
  | CreatedBy
  | Season
  | Episode
  | Network;

export type TAllCategory =
  | { type: CategoryType.Season; media: Season }
  | { type: CategoryType.Network; media: Network }
  | { type: CategoryType.CreatedBy; media: CreatedBy }
  | { type: CategoryType.Cast; media: TCast }
  | { type: CategoryType.Crew; media: TCrew }
  | { type: CategoryType.NowPlaying; media: TMovie }
  | { type: CategoryType.Trending; media: TTVShow | TMovie }
  | { type: CategoryType.Recommended; media: TTVShow | TMovie }
  | { type: CategoryType.Similar; media: TTVShow | TMovie }
  | { type: CategoryType.TopRated; media: TTVShow | TMovie }
  | { type: CategoryType.Upcoming; media: TTVShow | TMovie };

export type TAllMedia =
  | { type: PosterType.TV; media: TTVShow }
  | { type: PosterType.Movie; media: TMovie }
  | {
      type: PosterType.singleTVSeason;
      media: TSingleTVSeasonResponse & { season: string };
    }
  | {
      type: PosterType.TVDetails;
      media: TTVShowDetailsResponse;
      credits?: TMediaCreditsResponse;
    }
  | {
      type: PosterType.MovieDetails;
      media: TMovieDetailsResponse;
      credits?: TMediaCreditsResponse;
    };

export type TVideoModal = Exclude<
  TAllMedia,
  {
    type: PosterType.singleTVSeason;
    media: TSingleTVSeasonResponse & { season: string };
  }
> & {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
};

export type TAllDetailsMedia =
  | {
      type: PosterType.TVDetails;
      media: TTVShowDetailsResponse;
      credits?: TMediaCreditsResponse;
    }
  | {
      type: PosterType.MovieDetails;
      media: TMovieDetailsResponse;
      credits?: TMediaCreditsResponse;
    };

export type TMediaCredits =
  | {
      type: CreditsType.TVDetails;
      media: TTVShowDetailsResponse;
      credits?: TMediaCreditsResponse;
    }
  | {
      type: CreditsType.MovieDetails;
      media: TMovieDetailsResponse;
      credits?: TMediaCreditsResponse;
    };

export type TMediaActions =
  | { type: PosterType.TV; media: TTVShow }
  | { type: PosterType.Movie; media: TMovie };

export type TPersonLink = {
  id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  imdb_id: string;
  tvrage_id?: number;
  wikidata_id?: string;
  facebook_id: string;
  instagram_id: string;
  tiktok_id?: string;
  twitter_id: string;
  youtube_id: string;
};

type Profile = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type TPersonImageResponse = {
  id: number;
  profiles: Profile[];
};
