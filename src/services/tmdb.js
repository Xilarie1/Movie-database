import api from "../lib/axios.js";

// modular get function that accepts different paramters
const get = (url, params = {}) => {
  api
    .get(url, { params: { ...api.defaults.paramsSerializer, ...params } })
    .then((reuslt) => reuslt.data);
};
// gets list of trending movies, default to mediatype movie and wweek as time period
export const getTrending = (mediaType = "movie", trendingWindow = "week") => {
  return get(`/trending/${mediaType}/${trendingWindow}`);
};
// get popular movies based on imdb rating, defaults to mediatype movie and one page
export const getPopular = (pageNumber = 1, mediaType = "movie") => {
  return get(`/${mediaType}/popular`, { page: pageNumber });
};
// gets datga based on movie id
export const getMovieDetails = (movieID) => {
  return get(`/movie/${movieID}`, {
    append_to_response: "videos, images, credits",
  });
};

export const searchMulti = (searchQuery, pageNumber = 1) => {
  if (searchQuery.trim() !== "") {
    return get("/search/multi", {
      query: searchQuery,
      include_adult: false,
      page: pageNumber,
    });
  }
};
