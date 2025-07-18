import { useGetPopularMoviesQuery } from "../api/MovieApi";

const MovieCard = () => {
  const { data } = useGetPopularMoviesQuery();
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const renderStars = (rating) => {
    const stars = Math.round(rating / 2);
    return  "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.results.map((result) => (
          <div
            key={result.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`${IMG_URL}${result.poster_path}`}
              alt={result.title}
              className="w-full h-72 hover:scale-95 transition-all duration-2000"
            />
            <div className="p-4">
              <h3 className="text-lg font-semi mb-2">{result.title}</h3>
              <p className="text-yellow-500 text-sm">Ratings:{renderStars(result.vote_average)}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3 hover:underline">{result.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
