import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'components/api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCastVisible, setIsCastVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);

      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError('Something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const defaultPosterImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleTabClick = tab => {
    if (tab === 'cast') {
      setIsCastVisible(true);
      setIsReviewsVisible(false);
    } else if (tab === 'reviews') {
      setIsReviewsVisible(true);
      setIsCastVisible(false);
    }
  };

  return (
    <div className={css.container}>
      {movieDetails && (
        <div>
          <button onClick={handleGoBack} className={css.tabButton}>
            Go Back
          </button>
          <h2>{movieDetails.title}</h2>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : defaultPosterImg
            }
            width={250}
            alt="poster"
          />

          <div className={css.movieInfo}>
            <p>Release date: {movieDetails.release_date}</p>
            <p>Popularity: {movieDetails.vote_average}</p>
            <p>Overview: {movieDetails.overview}</p>
            <p className={css.genres}>
              Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
          <div className={css.tabs}>
            <button
              className={css.tabButton}
              onClick={() => handleTabClick('cast')}
            >
              Cast
            </button>
            <button
              className={css.tabButton}
              onClick={() => handleTabClick('reviews')}
            >
              Reviews
            </button>
          </div>

          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}

          {isCastVisible && <Cast movieId={movieId} />}
          {isReviewsVisible && <Reviews movieId={movieId} />}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
