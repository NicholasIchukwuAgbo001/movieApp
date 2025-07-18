const Movie = () => {

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* {data?.results?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))} */}
    </div>
  );
};

export default Movie;
