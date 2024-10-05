import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { domain_name } from "./conf";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${domain_name}/api/v1/users/`,
  }),
  endpoints: builder => ({
    registration: builder.mutation({
      query: body => ({
        url: "/registration/",
        method: "POST",
        body
      })
    }),
    login: builder.mutation({
      query: body => ({
        url: "/login/",
        method: "POST",
        body
      })
    })
  })
});

export const { useRegistrationMutation, useLoginMutation } = userApi;
