import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants/api.constants";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/v1/users/`
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
