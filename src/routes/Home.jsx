import MovieCard from '../components/MovieCard';
import { useMovieData } from '../hooks/SearchProvider';

const Home = () => {
  // Custom Hook
  const movies = useMovieData(); // consumer

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {movies?.Search?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default Home;
