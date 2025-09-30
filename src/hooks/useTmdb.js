import { useQuery } from "@tanstack/react-query";
import {
  getTrending,
  getPopular,
  getMovieDetails,
  searchMulti,
} from "../services/tmdb.js";

// Hook to get trending movies or TV shows
export const useTrending = (mediaType = "movie", trendingWindow = "week") => {
  return useQuery({
    queryKey: ["trending", mediaType, trendingWindow],
    queryFn: () => getTrending(mediaType, trendingWindow),
  });
};

// Hook to get popular movies or TV shows
export const usePopularMovies = (mediaType = "movie", pageNumber = 1) => {
  return useQuery({
    queryKey: ["popular", pageNumber, mediaType],
    queryFn: () => getPopular(mediaType, pageNumber),
  });
};

// Hook to get details of a specific movie
export const useMovieDetails = (movieID) => {
  return useQuery({
    queryKey: ["movie", movieID],
    queryFn: () => getMovieDetails(movieID),
    enabled: !!movieID, // only run query if movieID is truthy
  });
};

// Hook to search movies, TV shows, or people
export const useSearch = (searchQuery, pageNumber = 1) => {
  return useQuery({
    queryKey: ["search", searchQuery, pageNumber],
    queryFn: () => searchMulti(searchQuery, pageNumber),
    enabled: !!searchQuery, // only run query if searchQuery is not empty
  });
};
