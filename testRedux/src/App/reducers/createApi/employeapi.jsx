import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const API_URL = "https://jsonplaceholder.typicode.com"
export const todoListsApi = createApi({
  reducerPath: 'todoListsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTodoLists: builder.query({
      query: () => '/users',
    }),
  }),
});
export const { useGetTodoListsQuery } = todoListsApi;