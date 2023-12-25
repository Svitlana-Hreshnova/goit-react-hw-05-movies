const API_KEY = '1b93674f2cdbcec2a1dada65eabf4efc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const searchMovies = async searchTerm => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
