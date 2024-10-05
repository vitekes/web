import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../constants/api.constants";
import { RootState } from "../store";
import { domain_name } from "./conf";
import { clearAuthData } from "../features/auth/authSlice";
import { openModal } from "../features/modal_status/modalStatusSlice";

export interface INewsFeedItem {
  id: number;
  amount: number | null;
  category: string | null;
  subcategory: string | null;
  label_info: string | null;
  content: string | null;
  count_comments: number | null;
  count_likes: number | null;
  count_views: number | null;
  date: string | null;
  is_paid: boolean | null;
  language: string | null;
  namespace: "posts" | "tests" | "albums" | "quests";
  pinned_comment: string | null;
  preview: string | null;
  tags: string[] | null;
  title: string | null;
  user: string | null;
}

export interface IPopularNowItem {
  id: number;
  count_comments: number | null;
  count_likes: number | null;
  count_views: number | null;
  date: string | null;
  language: string | null;
  namespace: string | null;
  pinned_comment: string | null;
  preview: string | null;
  title: string | null;
  user: string | null;
  views_day: number | null;
  views_week: number | null;
}

export interface IPopularUserItem {
  id: number;
  username: string;
  views_day: number | null;
  views_week: number | null;
}

export interface IBestBlogsItem {
  id: number;
  preview: string | null;
  title: string;
  description: string | null;
  user: string;
  is_private: boolean;
  date: string | null;
  scores: number;
  subscribers: number;
}

export interface IBaseResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface INewsFeedResponse extends IBaseResponse {
  results: INewsFeedItem[];
}

export interface IPopularUsersResponse extends IBaseResponse {
  results: IPopularUserItem[];
}

export interface IBestBlogsResponse {
  data: IBestBlogsItem[];
}

export interface IFetchPopularNow {
  popular_day: IPopularNowItem[] | null;
  popular_week: IPopularNowItem[] | null;
}

const baseQuery = fetchBaseQuery({
  baseUrl: domain_name + "/api/v1/blogs/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.auth?.token;
    if (token) {
      headers.set("Authorization", `Token ${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    api.dispatch(clearAuthData());
    api.dispatch(openModal("login"));
  }

  return result;
};

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    fetchBestBlogs: builder.query<IBestBlogsResponse, { page: number }>({
      query: ({ page = 1 }) => `best_blogs/?page=${page}`
    }),
    fetchPopularNow: builder.query<IFetchPopularNow, { page: number }>({
      query: ({ page = 1 }) => `preview_popular/?page=${page}`
    }),
    fetchPopularUsers: builder.query<IPopularUsersResponse, { page: number }>({
      query: ({ page = 1 }) => `popular_users/?page=${page}`
    }),
    latestNewsTape: builder.query<INewsFeedResponse, { q: "tracked" | ""; page: number }>({
      query: ({ q = "", page = 1 }) => (q !== "" ? `/main/?page=${page}&q=${q}` : `/main/?page=${page}`)
    })
  })
});

export const { useLatestNewsTapeQuery, useFetchPopularNowQuery, useFetchPopularUsersQuery, useFetchBestBlogsQuery } = blogApi;
