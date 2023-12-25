import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieListItem}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

