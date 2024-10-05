import { configureStore } from "@reduxjs/toolkit";
import modalStatusReducer from "./features/modal_status/modalStatusSlice";
import authReducer from "./features/auth/authSlice";
import { userApi } from "./api/userApi";
import { blogApi } from "./api/blog";
import { postApi } from "./api/post";

export const store = configureStore({
  reducer: {
    modalStatuses: modalStatusReducer,
    user: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware).concat(blogApi.middleware).concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
