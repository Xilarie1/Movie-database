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

export const usePopularMovies = (mediaType = "movie", pageNumber = 1) =>
  useQuery({
    queryKey: ["popular", pageNumber, mediaType],
    queryFn: () => getPopular(pageNumber, mediaType),
  });

export const useMovieDetails = (movieId) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: [() => getMovieDetails(movieId)],
  });

export const useSearch = (searchQuery, pageNumber = 1) =>
  useQuery({
    queryKey: ["search", searchQuery, pageNumber],
    queryFn: () => searchMulti(searchQuery, pageNumber),
    enabled: !!searchQuery,
  });
