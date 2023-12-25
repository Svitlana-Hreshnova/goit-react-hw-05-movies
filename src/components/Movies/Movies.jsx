import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchTerm);
      setSearchResults(response.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className={css.container}>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={css.searchInput}
      />
      <button onClick={handleSearch}>Search</button>
      <ul className={css.movieList}>
        {searchResults.map(movie => (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
