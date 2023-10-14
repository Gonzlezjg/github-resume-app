import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getHistoryOfCommits: builder.query({
      query: () => `github-ch`,
    }),
    getReposByName: builder.query({
      query: (name) => `github-ch/${name}`,
    }),
  }),
});

export const { useGetHistoryOfCommitsQuery, useGetReposByNameQuery } =
  githubApi;
