import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MovieApiSlice } from "../api/MovieApi";

export const Store = configureStore({
  reducer: {
    [MovieApiSlice.reducerPath]: MovieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieApiSlice.middleware),
});

setupListeners(Store.dispatch);
