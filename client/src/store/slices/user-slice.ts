import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';

type UserState = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  email: string | null;
  username: string | null;
  avatarUrl: string | null;
  isPro: boolean;
};

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
  username: null,
  avatarUrl: null,
  isPro: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<{ 
      email: string; 
      username: string; 
      avatarUrl: string; 
      isPro: boolean 
    }>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.avatarUrl = action.payload.avatarUrl;
      state.isPro = action.payload.isPro;
    },
    requireAuth: (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    },
    requireLogout: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.email = null;
      state.username = null;
      state.avatarUrl = null;
      state.isPro = false;
    },
  },
});

export const { setAuthorizationStatus, setUserData, requireAuth, requireLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;