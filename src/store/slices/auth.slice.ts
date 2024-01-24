/* import { createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/auth.service";
export interface User {
  profile: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    isActive: boolean;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
  };
  token: string;
}
export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginSuccess: (state, actions) => {
      const data = JSON.parse(actions.payload);
      state.user = data.user;
      state.accessToken = data.accessToken;
      state.isLoggedIn = true;
    },
    loginFailure: (state) => {
      state.isLoggedIn = false;
    },
    resetAuth: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.accessToken = null;
    },
  },
});

export const { loginSuccess, loginFailure, resetAuth } = authSlice.actions;

export const authSelector = (state: any) => state.auth;

export default authSlice.reducer;

export function login(data: any) {
  return async (dispatch: any) => {
    try {
      const user = await authService.login(data.email, data.password);
      if (!!user) {
        const payload = {
          accessToken: user.data.data.accessToken,
          user: user.data.data.userData,
        };

        dispatch(loginSuccess(JSON.stringify(payload)));
      } else {
        console.log("error");
        dispatch(loginFailure());
      }
    } catch (e) {
      dispatch(loginFailure);
    }
  };
}

export function logout() {
  // @ts-ignore
  return async (dispatch) => {
    dispatch(resetAuth());
    dispatch(logout);
  };
}
 */
