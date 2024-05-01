import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawgApiKey = "6318edf22fb84549b1ca50a74582e9ca";
//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const rawgApi = createApi({
  reducerPath: "rawApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api" }),
  endpoints: (builder) => ({
    //GET GAMES
    getGames: builder.query({
      query: () => {
        return `/games?key=${rawgApiKey}`;
      },
    }),
     

    //GET GAMES DETAILS BY ID
    getGame: builder.query({
      query: (id) => {
        return `/games/${id}?key=${rawgApiKey}`;
      },
    }),


    //
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = rawgApi;
//https://api.rawg.io/api/games/{id}/movies