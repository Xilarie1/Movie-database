import api from "../lib/axios.js";

// Modular get function that accepts different parameters
const get = (url, params = {}) => {
  return api
    .get(url, { params: { ...api.defaults.paramsSerializer, ...params } })
    .then((result) => result.data);
};

// Gets list of trending movies or TV shows (defaults to movie and week)
export const getTrending = (mediaType = "movie", trendingWindow = "week") => {
  return get(`/trending/${mediaType}/${trendingWindow}`);
};

// Get popular movies or TV shows (defaults to movie and page 1)
export const getPopular = (mediaType = "movie", pageNumber = 1) => {
  return get(`/${mediaType}/popular`, { page: pageNumber });
};

// Get detailed data for a specific movie
export const getMovieDetails = (movieID) => {
  return get(`/movie/${movieID}`, {
    append_to_response: "videos, images, credits",
  });
};

// Search movies, TV shows, or people
export const searchMulti = (searchQuery, pageNumber = 1) => {
  if (!searchQuery.trim()) {
    // Return empty result if searchQuery is empty
    return Promise.resolve({ results: [] });
  }

  return get("/search/multi", {
    query: searchQuery,
    include_adult: false,
    page: pageNumber,
  });
};
