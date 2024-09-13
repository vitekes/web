import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://167.172.96.11/api/v1/users/",
  }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (body) => ({
        url: "/registration/",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = userApi;
