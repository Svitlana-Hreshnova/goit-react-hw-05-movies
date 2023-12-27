import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/api';
import css from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setIsLoading(true);

      try {
        const movieCredits = await getMovieCredits(movieId);
        setCredits(movieCredits.cast);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  const defaultActorImg = 'https://via.placeholder.com/150';

  return (
    <div className={css.castContainer}>
      <h2 className={css.castTitle}>Cast</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul className={css.castList}>
        {credits.map(actor => (
          <li key={actor.id} className={css.castListItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultActorImg
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
