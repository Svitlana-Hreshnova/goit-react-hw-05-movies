import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/api';
import css from './Home.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);

      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        setError('Error fetching trending movies...');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2>Trending Movies</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
    </div>
  );
};

export default Home;
