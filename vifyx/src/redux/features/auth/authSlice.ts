import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string;
  username: string;
}

export interface ICurrent {
  username: string;
  email: string;
  avatar?: string;
}

export interface IAccountState {
  auth?: IAuthState;
  current?: ICurrent;
}

const initialState: IAccountState = {
  auth: {
    token: localStorage.getItem("token") || "",
    username: localStorage.getItem("username") || "",
  },
  current: {
    username: localStorage.getItem("username") || "",
    email: "",
    avatar: "",
  },
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IAuthState>) => {
      const { username, token } = action.payload;
      state.auth = { username: username, token: token };
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      
    },
    clearAuthData: (state) => {
      state.auth = initialState.auth;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    },
    setCurrentUser: (state, action: PayloadAction<ICurrent>) => {
      state.current = action.payload;
    },
    clearCurrentUser: (state) => {
      state.current = initialState.current;
    },
  },
});

export const { setAuthData, clearAuthData, setCurrentUser, clearCurrentUser } = AuthSlice.actions;

export default AuthSlice.reducer;
