import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com";
export const CategoryApi = createApi({
  reducerPath: "todoListsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/users",
    }),
  }),
});
export const { useGetCategoryQuery } = CategoryApi;
