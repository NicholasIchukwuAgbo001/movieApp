import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieApiSlice = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl:``
    })
})
