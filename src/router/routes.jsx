import { createBrowserRouter } from "react-router";
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import AppLayout from "../pages/AppLayout";
import Movie from "../components/moviePage/Movie";
import MovieCard from "../reuseable/MovieCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/moviecard",
    element: <MovieCard/>
  },
  {
    path: "applyout",
    element: <AppLayout />,
    children: [
      {
        index: true, 
        element: <Movie />,
      },
    ],
  },
]);

export default router;