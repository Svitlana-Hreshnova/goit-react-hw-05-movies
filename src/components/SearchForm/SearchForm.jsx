import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';
import { searchMovies } from 'components/api';

const SearchForm = ({ setSearchResults, setIsLoading, setError }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const response = await searchMovies(searchTerm);
      setSearchResults(response.results);
      setSearchParams({ query: searchTerm });
    } catch (error) {
      setError('Something went wrong...');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={css.searchInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;