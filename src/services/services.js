import instance from "./instance";

export const getMovies = (page = 1) =>
  instance.get("discover/movie", { params: { page: page } });

export const getTrending = () => instance.get("trending/movie/day");

export const getGenre = () => instance.get("genre/movie/list");

export const getMoviesByGenres = (genres, page = 1) =>
  instance.get("discover/movie?sort_by=popularity.desc", {
    params: { with_genres: genres, page: page },
  });

export const getMovieDetail = (id) => instance.get(`movie/${id}`);

export const getMovieCredit = (id) => instance.get(`movie/${id}/credits`);
