import { useQuery } from "@tanstack/react-query";

import {
  getTrending,
  getPopular,
  getMovieDetails,
  searchMulti,
} from "../services/tmdb.js";

export const useTrending = (mediaType = "movie", trendingWindow = "week") =>
  useQuery({
    queryKey: ["trending", mediaType, trendingWindow],
    queryFn: () => getTrending(mediaType, trendingWindow),
  });

const { data, isLoading } = useTrending();

export const usePopularMovies = (mediatType = "movie", pageNumber = 1) =>
  useQuery({
    queryKey: ["popular", mediatType, pageNumber],
    queryFn: () => getPopular(mediatType, pageNumber),
  });

export const useMovieDetails = (movieID) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: [() => useMovieDetails(movieID)],
  });
export const useSearch = (searchQuery, pageNumber = 1) =>
  useQuery({
    queryKey: ["search", searchQuery, pageNumber],
    queryFn: () => searchMulti(searchQuery, pageNumber),
    enabled: !!searchQuery,
  });
