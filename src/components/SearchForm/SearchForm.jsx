import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onHandleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onHandleSubmit(searchTerm);
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
