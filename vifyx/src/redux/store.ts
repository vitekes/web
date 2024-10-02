import { configureStore } from "@reduxjs/toolkit";
import modalStatusReducer from "./features/modal_status/modalStatusSlice";
import authReducer from "./features/auth/authSlice";
import { userApi } from "./api/userApi";
import { blogApi } from "./api/blogApi";
import { contestApi } from "src/redux/api/contestsApi";

export const store = configureStore({
  reducer: {
    modalStatuses: modalStatusReducer,
    user: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [contestApi.reducerPath]: contestApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware).concat(blogApi.middleware).concat(contestApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
