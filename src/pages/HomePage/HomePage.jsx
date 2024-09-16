import { useFetchTrending } from "../../hooks/useFetchTrending";
import MoviesList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const { movies, isLoading, error } = useFetchTrending();

  return (
    <div>
      {isLoading && <div>Loader</div>}
      {error && <p>Something went wrong</p>}
      {isLoading === false && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
