import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieListItem}>
          <Link
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
