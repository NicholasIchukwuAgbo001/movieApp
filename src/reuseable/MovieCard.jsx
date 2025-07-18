import { useGetPopularMoviesQuery } from "../api/MovieApi";

const MovieCard = () => {

  const {data} = useGetPopularMoviesQuery();
  const IMG_URL = "https://image.tmdb.org/t/p/w500"

  return (
    <div>
      {data?.results.map((result) => (
        <div key={result.id}>
          <p> {result.title} </p>
          <p> {result.overview} </p>
          <p> {result.vote_average} </p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;