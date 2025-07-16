import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MovieApiSlice } from "../api/MovieApi";

export const Store = configureStore({
    reducer: {

    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat()
    )
})

setupListeners(Store.dispatch)