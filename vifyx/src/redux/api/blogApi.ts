import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://167.172.96.11/api/v1/blogs/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    latestNewsTape: builder.query({
      query: ({q}) => q !== "" ? `/main/?q=${q}` : "/main/",
    }),
  }),
});

export const { useLatestNewsTapeQuery } = blogApi;
