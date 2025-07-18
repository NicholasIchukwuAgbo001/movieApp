import { useGetPopularMoviesQuery } from "../api/MovieApi";

const MovieCard = () => {
  const { data } = useGetPopularMoviesQuery();
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div  className="grid grid-cols-4 gap-8">
      {data?.results.map((result) => (
        <div key={result.id}>
          <img src={`${IMG_URL}${result.poster_path}`} alt="img" className="w-50" />
          <p>{result.title}</p>
          <p>⭐⭐⭐{result.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
