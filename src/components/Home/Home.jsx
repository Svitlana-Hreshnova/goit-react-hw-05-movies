import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2>Trending Movies</h2>
      <ul className={css.movieList}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
