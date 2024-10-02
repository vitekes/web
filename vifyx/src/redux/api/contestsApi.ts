import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants/api.constants";
import { RootState } from "../store";

export const contestApi = createApi({
  reducerPath: "contestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/v1/contests/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    getContests: builder.query({
      query: () => "/"
    })
  })
});

export const { useGetContestsQuery } = contestApi;
