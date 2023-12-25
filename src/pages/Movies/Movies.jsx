import { useState } from 'react';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={css.container}>
      <h2>Search Movies</h2>
      <SearchForm
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
        setError={setError}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResults.length > 0 && <MoviesList movies={searchResults} />}
    </div>
  );
};

export default Movies;
