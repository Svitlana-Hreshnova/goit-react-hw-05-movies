import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'components/api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await searchMovies(query);
        setSearchResults(response.results);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const onHandleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div className={css.container}>
      <h2>Search Movies</h2>
      <SearchForm onHandleSubmit={onHandleSubmit} currentQuery={query} />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResults.length > 0 && <MoviesList movies={searchResults} />}
    </div>
  );
};

export default Movies;
