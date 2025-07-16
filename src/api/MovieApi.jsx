import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const movieBaseUrl = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_API_MOVIE_API_KEY;

export const MovieApiSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: movieBaseUrl }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `/popular?api_key=${API_KEY}`,
    }),
  }),
});

export const {useGetPopularMoviesQuery} = MovieApiSlice;