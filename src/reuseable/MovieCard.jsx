import { useGetPopularMoviesQuery } from "../api/MovieApi";

const MovieCard = () => {

  const {data} = useGetPopularMoviesQuery();

  return (
    <div>
      {data?.results.map((result) => (
        <div>
          <p> {result.title} </p>
          <p> {result.overview} </p>
          <p> {result.vote_average} </p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;