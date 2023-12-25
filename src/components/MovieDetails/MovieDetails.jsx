import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedTab, setSelectedTab] = useState('cover');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        const movieCredits = await getMovieCredits(movieId);
        const movieReviews = await getMovieReviews(movieId);

        setMovieDetails(details);
        setCredits(movieCredits.cast);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleTabClick = tab => {
    setSelectedTab(tab);
  };

  return (
    <div className={css.container}>
      {movieDetails && (
        <div>
          <h2>{movieDetails.title}</h2>

          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt={movieDetails.title}
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

          {selectedTab === 'cast' && (
            <div className={css.tabContent}>
              <h3>Cast</h3>
              <ul className={css.castList}>
                {credits.map(actor => (
                  <li key={actor.id}>{actor.name}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className={css.tabContent}>
              <h3>Reviews</h3>
              <ul className={css.reviewsList}>
                {reviews.map(review => (
                  <li key={review.id}>
                    <strong>{review.author}</strong>: {review.content}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
